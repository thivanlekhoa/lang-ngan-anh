/**
 * LĂNG NGÂN ANH - ACADEMIC PORTFOLIO & SCHOLARSHIP ROADMAP
 * Main JavaScript Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    currentRegion: "all",
    searchQuery: "",
    completedTasks: JSON.parse(localStorage.getItem("ngananh_tasks") || "[]")
  };

  // DOM Elements
  const scholarshipGrid = document.getElementById("scholarshipGrid");
  const comparisonTableBody = document.getElementById("comparisonTableBody");
  const futureGrid = document.getElementById("futureGrid");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearch");
  const regionFilters = document.getElementById("regionFilters");
  const visibleCountEl = document.getElementById("visibleCount");
  
  // Modal Elements
  const modal = document.getElementById("scholarshipModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCloseAction = document.getElementById("modalCloseAction");
  const modalFlag = document.getElementById("modalFlag");
  const modalCode = document.getElementById("modalCode");
  const modalTypeBadge = document.getElementById("modalTypeBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalCountry = document.getElementById("modalCountry");
  const modalBody = document.getElementById("modalBody");
  const modalOfficialLink = document.getElementById("modalOfficialLink");

  // Checklist Elements
  const checklistPhases = document.getElementById("checklistPhases");
  const checklistBar = document.getElementById("checklistBar");
  const checklistPercent = document.getElementById("checklistPercent");
  const checklistCount = document.getElementById("checklistCount");
  const resetChecklistBtn = document.getElementById("resetChecklist");

  // Navigation & Utility
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const backToTopBtn = document.getElementById("backToTop");

  // =========================================================================
  // Initialize Region Counts
  // =========================================================================
  function updateRegionCounts() {
    const total = scholarshipsData.length;
    const europe = scholarshipsData.filter(s => s.region === "europe").length;
    const asia = scholarshipsData.filter(s => s.region === "asia").length;
    const oceania = scholarshipsData.filter(s => s.region === "oceania").length;

    document.getElementById("countAll").textContent = total;
    document.getElementById("countEurope").textContent = europe;
    document.getElementById("countAsia").textContent = asia;
    document.getElementById("countOceania").textContent = oceania;
  }

  // =========================================================================
  // Render Scholarship Cards
  // =========================================================================
  function renderScholarships() {
    const filtered = scholarshipsData.filter(s => {
      const matchRegion = state.currentRegion === "all" || s.region === state.currentRegion;
      const query = state.searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        s.name.toLowerCase().includes(query) ||
        s.country.toLowerCase().includes(query) ||
        s.code.toLowerCase().includes(query) ||
        s.shortDesc.toLowerCase().includes(query);
      return matchRegion && matchQuery;
    });

    visibleCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      scholarshipGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 12px;"></i>
          <h4 style="font-size: 1.1rem; color: #475569; margin-bottom: 6px;">Không tìm thấy học bổng phù hợp</h4>
          <p style="color: #64748b; font-size: 0.9rem;">Vui lòng thử tìm kiếm với từ khóa khác hoặc bỏ chọn bộ lọc khu vực.</p>
        </div>
      `;
      return;
    }

    scholarshipGrid.innerHTML = filtered.map(s => `
      <article class="scholarship-card" data-id="${s.id}">
        <div class="card-top">
          <div class="card-flag-badge">
            <span class="card-flag" title="${s.country}">${s.flag}</span>
            <span class="card-code">${s.code}</span>
          </div>
          <span class="card-type ${s.type === 'government' ? 'gov' : 'uni'}">
            ${s.type === 'government' ? 'Học bổng Chính phủ' : 'Học bổng Đại học'}
          </span>
        </div>

        <h3 class="card-title">
          <a href="#${s.id}" class="open-detail-link" data-id="${s.id}">${s.name}</a>
        </h3>

        <div class="card-country">
          <i class="fa-solid fa-location-dot"></i>
          <span>${s.country}</span>
        </div>

        <div class="card-value-pill">
          <i class="fa-solid fa-gift"></i>
          <span>${s.badge}</span>
        </div>

        <p class="card-desc">${s.shortDesc}</p>

        <div class="card-criteria-tags">
          <span class="criteria-badge match"><i class="fa-solid fa-circle-check"></i> GPA 3.2: Đạt</span>
          <span class="criteria-badge match"><i class="fa-solid fa-circle-check"></i> IELTS 6.5-7.5: Đạt</span>
          <span class="criteria-badge match"><i class="fa-solid fa-circle-check"></i> Kinh nghiệm: 1 năm</span>
        </div>

        <div class="card-footer">
          <button class="btn btn-primary card-btn open-detail-btn" data-id="${s.id}">
            <i class="fa-solid fa-route"></i> Xem Chi tiết & Lộ trình Apply
          </button>
        </div>
      </article>
    `).join("");

    // Attach click events
    scholarshipGrid.querySelectorAll(".open-detail-btn, .open-detail-link").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        openScholarshipModal(id);
      });
    });
  }

  // =========================================================================
  // Render Quick Comparison Table
  // =========================================================================
  function renderComparisonTable() {
    comparisonTableBody.innerHTML = scholarshipsData.map(s => `
      <tr>
        <td>
          <a href="#${s.id}" class="table-scholarship-name" data-id="${s.id}">
            <span>${s.flag}</span>
            <span>${s.name}</span>
          </a>
        </td>
        <td>${s.country}</td>
        <td><strong>${s.badge}</strong></td>
        <td>
          <span class="badge badge-success">
            <i class="fa-solid fa-check"></i> Phù hợp 1 năm
          </span>
        </td>
        <td style="font-size: 0.85rem; color: #475569;">${s.timeline.open} – ${s.timeline.deadline}</td>
        <td>
          <button class="btn btn-outline table-btn open-detail-btn" data-id="${s.id}">
            <i class="fa-solid fa-arrow-right"></i> Xem lộ trình
          </button>
        </td>
      </tr>
    `).join("");

    comparisonTableBody.querySelectorAll(".open-detail-btn, .table-scholarship-name").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        openScholarshipModal(id);
      });
    });
  }

  // =========================================================================
  // Render Future Scholarships
  // =========================================================================
  function renderFutureScholarships() {
    futureGrid.innerHTML = futureScholarships.map(f => `
      <div class="future-item">
        <h4><i class="fa-solid fa-circle-info"></i> ${f.name}</h4>
        <p><strong>Yêu cầu:</strong> ${f.requirement}</p>
        <p style="margin-top: 4px; color: #92400e; font-style: italic;">${f.note}</p>
      </div>
    `).join("");
  }

  // =========================================================================
  // Modal Logic: Open & Populate Full Details
  // =========================================================================
  function openScholarshipModal(id) {
    const s = scholarshipsData.find(item => item.id === id);
    if (!s) return;

    modalFlag.textContent = s.flag;
    modalCode.textContent = s.code;
    modalTypeBadge.textContent = s.type === "government" ? "Học bổng Chính phủ" : "Học bổng Đại học";
    modalTitle.textContent = s.name;
    modalCountry.innerHTML = `<i class="fa-solid fa-earth-americas"></i> ${s.country}`;
    modalOfficialLink.href = s.officialUrl;

    // Build Modal Body Content
    modalBody.innerHTML = `
      <!-- Section 1: Overview & Benefits -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <i class="fa-solid fa-hand-holding-dollar"></i> Giá trị & Quyền lợi Tài trợ Toàn phần
        </h4>
        <ul class="benefit-list">
          ${s.benefits.map(b => `
            <li><i class="fa-solid fa-circle-check"></i> <span>${b}</span></li>
          `).join("")}
        </ul>
      </div>

      <!-- Section 2: Profile Match for Lăng Ngân Anh -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <i class="fa-solid fa-user-check"></i> Đối sánh Năng lực với Hồ sơ Ứng viên Lăng Ngân Anh
        </h4>
        <div class="match-grid">
          <div class="match-box">
            <h5><i class="fa-solid fa-chart-line"></i> Điểm GPA (3.2/4.0 ~80%)</h5>
            <p>${s.profileMatch.gpa}</p>
          </div>
          <div class="match-box">
            <h5><i class="fa-solid fa-language"></i> Chứng chỉ IELTS (Target 7.0)</h5>
            <p>${s.profileMatch.ielts}</p>
          </div>
          <div class="match-box">
            <h5><i class="fa-solid fa-briefcase"></i> Kinh nghiệm đi làm (01 năm)</h5>
            <p>${s.profileMatch.experience}</p>
          </div>
          <div class="match-box">
            <h5><i class="fa-solid fa-flask"></i> Định hướng Nghiên cứu & Đồ án</h5>
            <p>${s.profileMatch.research}</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Programs Consortium / Highlights -->
      ${s.samplePrograms && s.samplePrograms.length > 0 ? `
        <div class="modal-section">
          <h4 class="modal-section-title">
            <i class="fa-solid fa-sitemap"></i> Chương trình Tiêu biểu ngành Quản lý Môi trường
          </h4>
          <div class="consortium-list">
            ${s.samplePrograms.map(p => `
              <div class="consortium-item">
                <strong><a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i></a></strong>
                <span>${p.consortium}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Section 4: Required Documents -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <i class="fa-solid fa-folder-tree"></i> Danh mục Hồ sơ Cần chuẩn bị
        </h4>
        <ul class="benefit-list">
          ${s.documents.map(d => `
            <li><i class="fa-solid fa-file-lines"></i> <span>${d}</span></li>
          `).join("")}
        </ul>
      </div>

      <!-- Section 5: Timeline -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <i class="fa-solid fa-calendar-days"></i> Chu kỳ Tuyển sinh & Mốc Thời gian
        </h4>
        <div class="match-grid">
          <div class="match-box">
            <h5><i class="fa-regular fa-clock"></i> Mở nhận hồ sơ:</h5>
            <p><strong>${s.timeline.open}</strong></p>
          </div>
          <div class="match-box">
            <h5><i class="fa-regular fa-calendar-xmark"></i> Hạn chót đóng đơn:</h5>
            <p><strong style="color: #dc2626;">${s.timeline.deadline}</strong></p>
          </div>
          <div class="match-box">
            <h5><i class="fa-regular fa-comments"></i> Phỏng vấn (nếu có):</h5>
            <p>${s.timeline.interview}</p>
          </div>
          <div class="match-box">
            <h5><i class="fa-solid fa-trophy"></i> Công bố kết quả:</h5>
            <p><strong style="color: #16a34a;">${s.timeline.result}</strong> (Nhập học: ${s.timeline.departure})</p>
          </div>
        </div>
      </div>

      <!-- Section 6: Specific Action Roadmap for Lăng Ngân Anh -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <i class="fa-solid fa-stairs"></i> Lộ trình Từng bước để Ngân Anh Apply Học bổng này
        </h4>
        <div class="roadmap-steps">
          ${s.applicationRoadmap.map(r => `
            <div class="step-card">
              <div class="step-title">${r.step}</div>
              <div class="step-detail">${r.detail}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Section 7: Strategic Advice -->
      <div class="modal-section">
        <div class="strategy-box">
          <i class="fa-solid fa-lightbulb"></i>
          <div>
            <strong>Bí quyết chiến lược chinh phục:</strong>
            <p style="margin-top: 4px;">${s.strategyTips}</p>
          </div>
        </div>
      </div>
    `;

    // Show modal and update history hash
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (window.location.hash !== `#${s.id}`) {
      history.pushState(null, "", `#${s.id}`);
    }
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Clear hash cleanly without jumping
    if (window.location.hash) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }

  // Modal event listeners
  modalCloseBtn.addEventListener("click", closeModal);
  modalCloseAction.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Handle URL hash on initial page load or browser back/forward
  function handleUrlHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const match = scholarshipsData.find(s => s.id === hash);
      if (match) {
        openScholarshipModal(match.id);
      }
    }
  }

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && scholarshipsData.some(s => s.id === hash)) {
      openScholarshipModal(hash);
    } else {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // =========================================================================
  // Search & Filter Interactions
  // =========================================================================
  regionFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    regionFilters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    state.currentRegion = btn.getAttribute("data-filter");
    renderScholarships();
  });

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderScholarships();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderScholarships();
    searchInput.focus();
  });

  // =========================================================================
  // Interactive Checklist Engine
  // =========================================================================
  function renderChecklist() {
    let totalTasks = 0;
    masterChecklist.forEach(p => totalTasks += p.tasks.length);

    checklistPhases.innerHTML = masterChecklist.map((phase, pIdx) => `
      <div class="phase-accordion">
        <div class="phase-accordion-header">
          <h4><i class="fa-solid fa-flag-checkered" style="color: var(--primary);"></i> ${phase.phase}</h4>
          <span class="phase-count-tag">${phase.tasks.length} nhiệm vụ</span>
        </div>
        <div class="checklist-tasks">
          ${phase.tasks.map(t => {
            const isDone = state.completedTasks.includes(t.id);
            return `
              <label class="task-item ${isDone ? 'completed' : ''}" data-id="${t.id}">
                <input type="checkbox" data-id="${t.id}" ${isDone ? 'checked' : ''}>
                <span class="task-text">${t.text}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
    `).join("");

    updateChecklistProgress(totalTasks);

    // Attach checkbox handlers
    checklistPhases.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const taskId = e.target.getAttribute("data-id");
        const parentItem = e.target.closest(".task-item");

        if (e.target.checked) {
          if (!state.completedTasks.includes(taskId)) {
            state.completedTasks.push(taskId);
          }
          parentItem.classList.add("completed");
        } else {
          state.completedTasks = state.completedTasks.filter(id => id !== taskId);
          parentItem.classList.remove("completed");
        }

        localStorage.setItem("ngananh_tasks", JSON.stringify(state.completedTasks));
        updateChecklistProgress(totalTasks);
      });
    });
  }

  function updateChecklistProgress(totalTasks) {
    const doneCount = state.completedTasks.length;
    const percent = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

    checklistBar.style.width = `${percent}%`;
    checklistPercent.textContent = `${percent}%`;
    checklistCount.textContent = `Đã hoàn thành ${doneCount} / ${totalTasks} đầu việc`;
  }

  resetChecklistBtn.addEventListener("click", () => {
    if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ checklist về trạng thái ban đầu?")) {
      state.completedTasks = [];
      localStorage.removeItem("ngananh_tasks");
      renderChecklist();
    }
  });

  // =========================================================================
  // Mobile Nav & Smooth Navigation
  // =========================================================================
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Highlight active navbar item on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (navItem && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-menu .nav-link").forEach(l => l.classList.remove("active"));
        navItem.classList.add("active");
      }
    });
  });

  // =========================================================================
  // Initialization Sequence
  // =========================================================================
  updateRegionCounts();
  renderScholarships();
  renderComparisonTable();
  renderFutureScholarships();
  renderChecklist();
  handleUrlHash();
});
