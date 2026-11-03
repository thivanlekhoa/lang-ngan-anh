// Dữ liệu chi tiết về các chương trình học bổng Thạc sĩ toàn phần 
// Được tối ưu hoá riêng cho hồ sơ của ứng viên Lăng Ngân Anh
const scholarshipsData = [
  {
    id: "erasmus-mundus",
    code: "EMJM",
    name: "Erasmus Mundus Joint Masters (EMJM)",
    country: "Châu Âu (Đa quốc gia: Thụy Điển, Áo, Bỉ, Pháp, Hà Lan...)",
    region: "europe",
    type: "government",
    flag: "🇪🇺",
    badge: "Tài trợ 100% + Du học đa quốc gia",
    shortDesc: "Chương trình Thạc sĩ danh giá nhất Liên minh Châu Âu, học tập tại tối thiểu 2-3 quốc gia khác nhau, cấp 2-3 bằng thạc sĩ chính quy.",
    officialUrl: "https://www.eacea.ec.europa.eu/scholarships/erasmus-plus-scholarships_en",
    samplePrograms: [
      {
        name: "MESPOM - Environmental Sciences, Policy and Management",
        consortium: "Lund Univ (Thụy Điển), Central European Univ (Áo), Manchester Univ (Anh), Aegean Univ (Hy Lạp)",
        url: "https://mespom.eu"
      },
      {
        name: "IMETE - International Master in Environmental Technology and Engineering",
        consortium: "Ghent University (Bỉ), IHE Delft (Hà Lan), UCT Prague (Séc)",
        url: "https://www.imete.eu"
      },
      {
        name: "MER2030 - European MSc in Marine Environment and Resources",
        consortium: "Univ of Bordeaux (Pháp), Southampton (Anh), Basque Country (Tây Ban Nha), Liège (Bỉ)",
        url: "https://merconsortium.eu"
      }
    ],
    benefits: [
      "100% học phí toàn bộ khóa học 2 năm",
      "Sinh hoạt phí: 1.400 EUR/tháng (~38.000.000 VND/tháng) suốt 24 tháng",
      "Hỗ trợ vé máy bay quốc tế và chi phí di chuyển giữa các quốc gia",
      "Bảo hiểm y tế quốc tế toàn diện chuẩn Châu Âu",
      "Tốt nghiệp nhận bằng kép hoặc bằng liên hiệp (Joint Degree) từ các ĐH top đầu"
    ],
    profileMatch: {
      gpa: "GPA yêu cầu >= 3.0/4.0. Hồ sơ Ngân Anh đạt 3.2/4.0 (~80%) hoàn toàn đạt tiêu chuẩn.",
      ielts: "IELTS Academic mục tiêu 6.5 - 7.0 (không band dưới 6.0/6.5). Target 7.0 của Ngân Anh rất an toàn.",
      experience: "Không yêu cầu kinh nghiệm làm việc bắt buộc. Kinh nghiệm 1 năm của Ngân Anh là điểm cộng thực tế xuất sắc.",
      research: "Ưu tiên đồ án/khóa luận tốt nghiệp về môi trường và bài luận cá nhân (Motivation Letter) chặt chẽ."
    },
    documents: [
      "CV học thuật định dạng Europass",
      "Motivation Letter (Bài luận nêu rõ động lực và lý do chọn liên minh trường)",
      "2 Thư giới thiệu học thuật (Academic Recommendation Letters) từ giảng viên ĐH TN&MT Hà Nội",
      "Bảng điểm đại học và Bằng cử nhân dịch thuật công chứng tiếng Anh",
      "Chứng chỉ IELTS Academic (tối thiểu 6.5, khuyến nghị 7.0)",
      "Bản tóm tắt khóa luận tốt nghiệp hoặc ấn phẩm khoa học (nếu có)"
    ],
    timeline: {
      open: "Tháng 10 - Tháng 11 hàng năm",
      deadline: "05/01 - 15/01 hàng năm",
      interview: "Tháng 2 - Tháng 3",
      result: "Tháng 4 - Tháng 5",
      departure: "Tháng 8 - Tháng 9"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Chọn Consortium phù hợp & Chuẩn bị đề tài (T10 - T11)",
        detail: "Truy cập cổng EMJM Catalogue, chọn 1-3 chương trình sát nhất với ngành Quản lý tài nguyên môi trường (khuyên chọn MESPOM và IMETE). Đọc kỹ tiêu chí từng trường thành viên."
      },
      {
        step: "Bước 2: Viết Motivation Letter & Xin 2 Thư giới thiệu (T11 - T12)",
        detail: "Nêu bật nền tảng đào tạo tại ĐH Tài nguyên & Môi trường Hà Nội kết hợp 1 năm kinh nghiệm thực tế. Liên hệ 2 giảng viên hướng dẫn khóa luận để xin thư giới thiệu chuẩn học thuật."
      },
      {
        step: "Bước 3: Nộp hồ sơ trực tuyến trên cổng Consortium (Trước 10/01)",
        detail: "Upload toàn bộ hồ sơ lên cổng ứng tuyển của chương trình. Lưu ý học bổng và xét tuyển nhập học diễn ra đồng thời, không cần xin thư mời nhập học riêng."
      },
      {
        step: "Bước 4: Phỏng vấn trực tuyến (Tháng 2 - Tháng 3)",
        detail: "Một số chương trình như MESPOM sẽ mời ứng viên vào vòng phỏng vấn 15-20 phút. Chuẩn bị kỹ về định hướng nghề nghiệp và kế hoạch đóng góp cho môi trường tại Việt Nam."
      },
      {
        step: "Bước 5: Nhận thông báo Main List, Xin Visa & Xuất ngoại (Tháng 4 - Tháng 8)",
        detail: "Nhận thư cấp học bổng chính thức từ Ủy ban Châu Âu, làm thủ tục Visa tại Đại sứ quán của quốc gia học kỳ 1 (VD: Thụy Điển hoặc Bỉ)."
      }
    ],
    strategyTips: "EMJM không yêu cầu liên hệ giáo sư trước. Chìa khóa quyết định là bài Motivation Letter phải giải thích được tại sao bạn cần học ở cả 3 trường khác nhau và chương trình sẽ giúp bạn giải quyết thách thức môi trường cụ thể nào ở Việt Nam."
  },
  {
    id: "mext-japan",
    code: "MEXT",
    name: "Học bổng Chính phủ Nhật Bản (MEXT - Embassy Track)",
    country: "Nhật Bản (ĐH Tokyo, Kyoto, Tohoku, Hokkaido, Nagoya...)",
    region: "asia",
    type: "government",
    flag: "🇯🇵",
    badge: "100% Học phí + Trợ cấp ~25 triệu/tháng + Vé máy bay",
    shortDesc: "Học bổng chính phủ danh giá nhất châu Á, đào tạo diện Nghiên cứu sinh (Research Student) chuyển tiếp Thạc sĩ tại các viện đại học Hoàng gia Nhật Bản.",
    officialUrl: "https://www.vn.emb-japan.go.jp/itpr_ja/MEXT_Scholarship.html",
    samplePrograms: [
      {
        name: "Graduate School of Frontier Sciences - University of Tokyo",
        consortium: "Chuyên ngành Môi trường và Bền vững (Sustainability Studies)",
        url: "https://www.k.u-tokyo.ac.jp/en/"
      },
      {
        name: "Graduate School of Global Environmental Studies - Kyoto University",
        consortium: "Một trong những trung tâm nghiên cứu môi trường hàng đầu thế giới",
        url: "https://www.ges.kyoto-u.ac.jp/en/"
      }
    ],
    benefits: [
      "100% học phí, phí nhập học và phí dự thi trong toàn bộ quá trình học",
      "Sinh hoạt phí: ~144.000 JPY/tháng (~24.000.000 - 25.000.000 VND/tháng)",
      "Vé máy bay khứ hồi Việt Nam - Nhật Bản",
      "Được học 6 tháng tiếng Nhật chuyên sâu miễn phí nếu có nhu cầu",
      "Cơ hội làm việc trong các phòng Lab tiên tiến bậc nhất thế giới"
    ],
    profileMatch: {
      gpa: "GPA yêu cầu >= 7.0/10 hoặc 2.8/4.0. Điểm 3.2/4.0 của Ngân Anh hoàn toàn đáp ứng tốt.",
      ielts: "IELTS 6.5+ trở lên (hoặc tiếng Nhật JLPT N2+). Có tiếng Anh tốt đủ điều kiện ứng tuyển học hoàn toàn bằng tiếng Anh.",
      experience: "Không yêu cầu kinh nghiệm. Kinh nghiệm 1 năm giúp đề cương nghiên cứu thực tiễn hơn.",
      research: "Yếu tố quyết định là Đề cương nghiên cứu (Research Proposal) 3-5 trang."
    },
    documents: [
      "Đơn ứng tuyển MEXT theo mẫu của Đại sứ quán Nhật Bản",
      "Đề cương nghiên cứu (Field of Study and Research Plan) - Tài liệu quan trọng nhất",
      "Bảng điểm đại học và Bằng cử nhân (Dịch công chứng tiếng Anh hoặc tiếng Nhật)",
      "Thư giới thiệu từ Trưởng khoa hoặc Giảng viên hướng dẫn tốt nghiệp",
      "Chứng chỉ IELTS Academic (hoặc JLPT nếu có)",
      "Giấy khám sức khỏe theo mẫu riêng của MEXT"
    ],
    timeline: {
      open: "Tháng 4 hàng năm",
      deadline: "Giữa đến cuối tháng 5 hàng năm",
      interview: "Tháng 6 - Tháng 7 (Thi viết & Phỏng vấn tại ĐSQ)",
      result: "Tháng 1 - Tháng 2 năm sau (MEXT Tokyo duyệt cuối)",
      departure: "Tháng 4 hoặc Tháng 10 năm sau"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Viết Đề cương nghiên cứu chuyên sâu (Tháng 1 - Tháng 3)",
        detail: "Xây dựng Research Proposal (3-5 trang) về chủ đề Quản lý chất thải / Tài nguyên nước / Biến đổi khí hậu tại Việt Nam, nêu rõ phương pháp và lý do phải làm nghiên cứu này tại Nhật Bản."
      },
      {
        step: "Bước 2: Nộp hồ sơ vòng sơ tuyển tại Đại sứ quán Nhật Bản (Tháng 4 - T5)",
        detail: "Tải biểu mẫu từ website ĐSQ Nhật tại Hà Nội. Hoàn thiện bộ hồ sơ bản cứng và nộp trực tiếp hoặc gửi chuyển phát nhanh về ĐSQ trước hạn chót."
      },
      {
        step: "Bước 3: Thi viết & Phỏng vấn tại Đại sứ quán (Tháng 6 - Tháng 7)",
        detail: "Vượt qua bài thi viết tiếng Anh (và tiếng Nhật nếu có). Tham gia phỏng vấn trực tiếp trước hội đồng giám khảo ĐSQ Nhật Bản về đề cương nghiên cứu."
      },
      {
        step: "Bước 4: Xin Giấy chấp thuận tiếp nhận (Letter of Acceptance - LOA) từ Giáo sư Nhật (Tháng 8 - Tháng 9)",
        detail: "Sau khi đỗ vòng 1 ĐSQ, gửi hồ sơ đến các Giáo sư thuộc ĐH Tokyo, ĐH Kyoto... để xin LOA chính thức (tối đa xin 2 LOA)."
      },
      {
        step: "Bước 5: MEXT Tokyo phê duyệt cuối cùng & Khởi hành (Tháng 1 - Tháng 4/10)",
        detail: "MEXT chốt danh sách chính thức. Làm visa du học diện học bổng MEXT và lên đường sang Nhật."
      }
    ],
    strategyTips: "Đề tài nghiên cứu nên gắn chặt giữa thực trạng ô nhiễm hoặc quản lý môi trường tại Việt Nam với công nghệ tiên tiến mà Nhật Bản đang dẫn đầu (ví dụ: công nghệ xử lý nước tuần hoàn, vi nhựa, kinh tế tuần hoàn)."
  },
  {
    id: "gks-korea",
    code: "GKS",
    name: "Global Korea Scholarship (GKS-G - Học bổng Chính phủ Hàn Quốc)",
    country: "Hàn Quốc (SNU, KAIST, Yonsei, Korea University, Kookmin...)",
    region: "asia",
    type: "government",
    flag: "🇰🇷",
    badge: "100% Học phí 3 năm + 1.000.000 KRW/tháng + 1 năm học tiếng Hàn",
    shortDesc: "Học bổng toàn diện của Bộ Giáo dục Hàn Quốc (NIIED) bao gồm 1 năm học tiếng Hàn và 2 năm học chuyên ngành Thạc sĩ tại các trường đại học top 1 Hàn Quốc.",
    officialUrl: "https://www.studyinkorea.go.kr",
    samplePrograms: [
      {
        name: "Graduate School of Environmental Studies - Seoul National University (SNU)",
        consortium: "Đại học Quốc gia Seoul - ĐH số 1 Hàn Quốc",
        url: "https://gses.snu.ac.kr"
      },
      {
        name: "Dept. of Civil and Environmental Engineering - KAIST",
        consortium: "Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc",
        url: "https://cee.kaist.ac.kr"
      }
    ],
    benefits: [
      "100% học phí trọn gói trong 3 năm (1 năm học tiếng Hàn + 2 năm Thạc sĩ)",
      "Sinh hoạt phí: 1.000.000 KRW/tháng (~18.500.000 VND/tháng)",
      "Trợ cấp định cư ban đầu: 200.000 KRW; Trợ cấp sau khi hoàn thành khóa học: 100.000 KRW",
      "Vé máy bay khứ hồi Việt Nam - Hàn Quốc",
      "Bảo hiểm y tế quốc dân Hàn Quốc trong suốt thời gian học"
    ],
    profileMatch: {
      gpa: "Yêu cầu GPA tích lũy >= 80% (tương đương 3.2/4.0 theo chuẩn NIIED). Ngân Anh vừa vặn đạt chuẩn này.",
      ielts: "IELTS 6.5+ hoặc TOPIK 3+. Có chứng chỉ ngoại ngữ cao là lợi thế cạnh tranh lớn.",
      experience: "Không yêu cầu kinh nghiệm. Ứng viên mới tốt nghiệp hoặc đi làm 1 năm đều được xét bình đẳng.",
      research: "Statement of Purpose và Study Plan chi tiết chiếm tỷ trọng điểm rất cao."
    },
    documents: [
      "Bộ đơn ứng tuyển GKS-G (Applicant Form, Personal Statement, Statement of Purpose)",
      "2 Thư giới thiệu học thuật niêm phong có chữ ký giáp lai của giảng viên",
      "Bằng tốt nghiệp cử nhân và Bảng điểm ĐH Hợp pháp hóa lãnh sự (Cục Lãnh sự + ĐSQ Hàn Quốc)",
      "Chứng chỉ IELTS Academic và TOPIK (nếu có)",
      "Giấy tờ chứng minh quốc tịch của ứng viên và cha mẹ (Hộ chiếu/CCCD/Sổ hộ khẩu dịch thuật)",
      "Giấy khám sức khỏe theo mẫu GKS"
    ],
    timeline: {
      open: "Đầu tháng 2 hàng năm",
      deadline: "Cuối tháng 2 - Đầu tháng 3 hàng năm",
      interview: "Tháng 3 (Vòng 1 ĐSQ/Trường) -> Tháng 4-5 (Vòng 2 NIIED)",
      result: "Tháng 6 hàng năm",
      departure: "Cuối tháng 8 hàng năm"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Chọn Kênh nộp đơn (Embassy Track hoặc University Track) (Tháng 12 - T1)",
        detail: "Embassy Track cho phép chọn 3 trường đại học nhưng phải qua ĐSQ Hàn Quốc tại Hà Nội. University Track nộp thẳng về 1 trường duy nhất (tỉ lệ cạnh tranh phân tán hơn)."
      },
      {
        step: "Bước 2: Hợp pháp hóa lãnh sự Bằng & Bảng điểm (Tháng 1)",
        detail: "Thực hiện dịch thuật công chứng tiếng Anh, xin tem Cục Lãnh sự (Bộ Ngoại giao VN) và tem tím của Phòng Lãnh sự ĐSQ Hàn Quốc tại Hà Nội."
      },
      {
        step: "Bước 3: Nộp hồ sơ và Phỏng vấn Vòng 1 (Tháng 2 - Tháng 3)",
        detail: "Nộp bộ hồ sơ hoàn chỉnh trước hạn chót. Tham gia phỏng vấn vòng 1 tại ĐSQ Hàn Quốc (nếu đi Embassy Track)."
      },
      {
        step: "Bước 4: NIIED xét duyệt Vòng 2 & Nhận LOA Vòng 3 (Tháng 4 - Tháng 5)",
        detail: "NIIED rà soát hồ sơ. Các trường ĐH nhận hồ sơ từ ĐSQ sẽ gửi thư mời nhập học chính thức."
      },
      {
        step: "Bước 5: Công bố kết quả cuối cùng & Nhập học (Tháng 6 - Tháng 8)",
        detail: "NIIED công bố danh sách học giả GKS trúng tuyển. Làm visa D-4-1 (học tiếng) hoặc D-2 (Thạc sĩ)."
      }
    ],
    strategyTips: "Nếu Ngân Anh muốn cơ hội cao, hãy cân nhắc chọn các trường khối Regional University thuộc mạng lưới GKS để được ưu tiên chỉ tiêu học bổng cao hơn nhóm trường Seoul."
  },
  {
    id: "france-eiffel",
    code: "EIFFEL",
    name: "Học bổng Xuất sắc France Excellence Eiffel (Pháp)",
    country: "Pháp (Sorbonne, AgroParisTech, Univ Paris-Saclay, Grenoble INP...)",
    region: "europe",
    type: "government",
    flag: "🇫🇷",
    badge: "1.181 EUR/tháng + Miễn học phí trường công + Vé máy bay",
    shortDesc: "Học bổng danh giá bậc nhất của Bộ Ngoại giao Pháp. Nhóm ngành Chuyển dịch sinh thái & Môi trường (Transition écologique) là nhóm ngành được ưu tiên hàng đầu.",
    officialUrl: "https://www.campusfrance.org/en/france-excellence-eiffel-scholarship-program",
    samplePrograms: [
      {
        name: "AgroParisTech - Master in Environmental Sciences and Technology",
        consortium: "Viện đại học hàng đầu châu Âu về khoa học môi trường & nông nghiệp",
        url: "https://www.agroparistech.fr"
      },
      {
        name: "Université Paris-Saclay - MSc Environmental Engineering & Management",
        consortium: "Đại học top 1 nước Pháp và hàng đầu thế giới về khoa học",
        url: "https://www.universite-paris-saclay.fr"
      }
    ],
    benefits: [
      "Sinh hoạt phí cố định: 1.181 EUR/tháng (~32.000.000 VND/tháng) trong 12 - 24 tháng",
      "Miễn 100% học phí tại các trường đại học công lập của Pháp",
      "Vé máy bay quốc tế khứ hồi Việt Nam - Pháp",
      "Bảo hiểm xã hội và bảo hiểm y tế bổ sung (Mutuelle)",
      "Được ưu tiên bố trí chỗ ở trong ký túc xá CROUS và hỗ trợ trợ cấp nhà ở (CAF)"
    ],
    profileMatch: {
      gpa: "GPA yêu cầu xếp loại Khá/Giỏi trở lên. GPA 3.2/4.0 của Ngân Anh đủ điều kiện để trường Pháp xem xét đề cử.",
      ielts: "IELTS 6.5+ cho các chương trình dạy 100% bằng tiếng Anh (hoặc DELF B2 tiếng Pháp nếu học tiếng Pháp).",
      experience: "Không yêu cầu kinh nghiệm. Ưu tiên các dự án thực tế về chuyển đổi xanh, quản lý môi trường.",
      research: "Đặc thù: Ứng viên KHÔNG nộp đơn trực tiếp cho Eiffel mà phải được một trường tại Pháp đứng ra bảo lãnh đề cử."
    },
    documents: [
      "CV học thuật chuẩn quốc tế",
      "Project professionnel (Bài luận định hướng nghề nghiệp và kế hoạch phát triển)",
      "Bảng điểm đại học 4 năm và Bằng cử nhân có công chứng dịch thuật tiếng Anh hoặc tiếng Pháp",
      "Chứng chỉ IELTS Academic (6.5 trở lên)",
      "2 Thư giới thiệu từ Giáo sư/Giảng viên ĐH Tài nguyên & Môi trường Hà Nội",
      "Thư chấp thuận đề cử từ Ban giám hiệu trường ĐH tại Pháp"
    ],
    timeline: {
      open: "Tháng 9 - Tháng 10 hàng năm (Nộp đơn vào trường Pháp)",
      deadline: "Đầu tháng 1 năm sau (Trường chốt danh sách gửi Campus France)",
      interview: "Tùy trường (Tháng 11 - Tháng 12)",
      result: "Đầu tháng 4 hàng năm",
      departure: "Tháng 8 - Tháng 9 hàng năm"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Tìm kiếm chương trình học tiếng Anh tại Pháp (Tháng 8 - Tháng 9)",
        detail: "Vào catalogue của Campus France tìm các chương trình Thạc sĩ dạy bằng tiếng Anh ngành Environmental Management / Sustainable Development tại Paris-Saclay, AgroParisTech."
      },
      {
        step: "Bước 2: Nộp hồ sơ xin admission vào trường và xin đề cử Eiffel (Tháng 9 - Tháng 11)",
        detail: "Gửi hồ sơ học thuật vào trường. Trong thư xin học, ghi rõ nguyện vọng: 'I wish to be nominated for the France Excellence Eiffel Scholarship'."
      },
      {
        step: "Bước 3: Trường phỏng vấn và duyệt danh sách đề cử (Tháng 11 - Tháng 12)",
        detail: "Khoa chuyên môn sẽ phỏng vấn bạn. Nếu đạt xuất sắc, trường sẽ hoàn thiện hồ sơ gửi lên Ủy ban Eiffel trước ngày 10/01."
      },
      {
        step: "Bước 4: Công bố kết quả chính thức từ Campus France Paris (Đầu tháng 4)",
        detail: "Campus France công bố danh sách trúng tuyển trên website chính thức."
      },
      {
        step: "Bước 5: Làm thủ tục Visa du học Pháp thông qua Etudes en France (Tháng 5 - Tháng 7)",
        detail: "Sinh viên có học bổng Eiffel được miễn hoàn toàn phí phỏng vấn Campus France và thủ tục visa diễn ra nhanh chóng."
      }
    ],
    strategyTips: "Vì ngành Môi trường (Transition écologique) là 1 trong 3 nhóm ngành ưu tiên tuyệt đối của học bổng Eiffel năm nay, đây là lợi thế tự nhiên cực lớn của sinh viên tốt nghiệp ngành Quản lý tài nguyên môi trường!"
  },
  {
    id: "belgium-master-mind",
    code: "MASTER-MIND",
    name: "Master Mind Scholarships (Chính phủ Vùng Flanders, Bỉ)",
    country: "Bỉ (KU Leuven, Ghent University, University of Antwerp...)",
    region: "europe",
    type: "government",
    flag: "🇧🇪",
    badge: "Trợ cấp 10.000 €/năm + Miễn học phí",
    shortDesc: "Học bổng do Bộ Giáo dục vùng Flanders tài trợ cho sinh viên xuất sắc học Thạc sĩ tại các trường ĐH nghiên cứu hàng đầu châu Âu nói tiếng Hà Lan của Bỉ.",
    officialUrl: "https://www.studyinflanders.be/scholarships/master-mind-scholarships",
    samplePrograms: [
      {
        name: "Ghent University - MSc in Environmental Science and Technology",
        consortium: "Ghent là một trong những trung tâm nghiên cứu môi trường hàng đầu châu Âu",
        url: "https://www.ugent.be"
      },
      {
        name: "KU Leuven - MSc in Sustainable Development / Water Resources",
        consortium: "Trường đại học nghiên cứu số 1 tại Bỉ và top 50 thế giới",
        url: "https://www.kuleuven.be"
      }
    ],
    benefits: [
      "Trợ cấp sinh hoạt phí: 10.000 EUR/năm học (tổng 20.000 EUR cho 2 năm)",
      "Miễn gần như 100% học phí (sinh viên chỉ phải đóng phí đăng ký hành chính tượng trưng ~130 EUR/năm)",
      "Được hỗ trợ bảo hiểm và ưu tiên sắp xếp phòng trong ký túc xá sinh viên quốc tế",
      "Môi trường học tập đa văn hóa ngay tại trái tim của Liên minh Châu Âu"
    ],
    profileMatch: {
      gpa: "Tiêu chuẩn ghi 3.5/4.0. Tuy nhiên ứng viên có GPA 3.2 với hồ sơ nghiên cứu hoặc SOP ấn tượng vẫn được Ghent hoặc Antwerp đề cử.",
      ielts: "Yêu cầu IELTS Academic 7.0 (hoặc TOEFL iBT 94+).",
      experience: "Không yêu cầu kinh nghiệm. Ưu tiên năng lực học thuật và thư giới thiệu mạnh.",
      research: "Được trường đại học tại Bỉ sơ tuyển và gửi link nộp hồ sơ lên cổng vùng Flanders."
    },
    documents: [
      "Hồ sơ xin nhập học của trường ĐH tại Bỉ (KU Leuven, Ghent Univ)",
      "Motivation Letter viết riêng cho học bổng Master Mind",
      "2 Thư giới thiệu học thuật từ giáo sư trường đại học cũ",
      "Bảng điểm đại học và Bằng tốt nghiệp cử nhân dịch thuật công chứng tiếng Anh",
      "Chứng chỉ IELTS Academic (tối thiểu 7.0)"
    ],
    timeline: {
      open: "Tháng 12 hàng năm",
      deadline: "15/01 (KU Leuven), 01/02 (Antwerp), hoặc 01/03 (Ghent)",
      interview: "Tùy khoa (Tháng 2 - Tháng 3)",
      result: "Tháng 6 hàng năm",
      departure: "Tháng 9 hàng năm"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Nộp hồ sơ xin nhập học vào KU Leuven hoặc Ghent University (T12 - T1)",
        detail: "Hoàn thành hồ sơ nhập học Thạc sĩ ngành Môi trường trước hạn chót của từng trường (KU Leuven thường đóng sớm vào 15/01)."
      },
      {
        step: "Bước 2: Nhận đề cử từ trường ĐH tại Bỉ (Tháng 2 - Tháng 3)",
        detail: "Nếu hồ sơ được đánh giá cao, trường sẽ liên hệ gửi link để bạn hoàn tất hồ sơ trên cổng Flanders Master Mind."
      },
      {
        step: "Bước 3: Hoàn tất đơn trên cổng Master Mind (Trước tháng 4)",
        detail: "Upload bài luận học bổng và các tài liệu chứng minh thành tích học tập."
      },
      {
        step: "Bước 4: Nhận kết quả và Xin Visa du học Bỉ (Tháng 6 - Tháng 7)",
        detail: "Hội đồng xét duyệt công bố danh sách học bổng. Làm hồ sơ xin Visa diện sinh viên có học bổng chính phủ Bỉ."
      }
    ],
    strategyTips: "Nên tập trung ứng tuyển vào Đại học Ghent (Ghent University) vì khoa Khoa học Sinh học & Môi trường của Ghent có rất nhiều chỉ tiêu đề cử Master Mind và đánh giá rất cao sinh viên có 1 năm kinh nghiệm thực tiễn."
  },
  {
    id: "australia-rtp",
    code: "RTP",
    name: "Australian RTP / UniMelb Graduate Research Scholarships",
    country: "Úc (Đại học Melbourne, UQ, ANU, UNSW - Nhóm Go8)",
    region: "oceania",
    type: "university",
    flag: "🇦🇺",
    badge: "100% Học phí + ~38.000 AUD/năm + Bảo hiểm OSHC",
    shortDesc: "Chương trình học bổng Thạc sĩ nghiên cứu (Master of Science by Research / MPhil in Environmental Science) do Chính phủ Úc tài trợ kết hợp quỹ trường Go8.",
    officialUrl: "https://scholarships.unimelb.edu.au",
    samplePrograms: [
      {
        name: "University of Melbourne - Master of Philosophy (MPhil) in Science",
        consortium: "Đại học số 1 nước Úc, chuyên sâu về Quản lý Môi trường & Tài nguyên nước",
        url: "https://science.unimelb.edu.au"
      },
      {
        name: "University of Queensland (UQ) - MPhil in Environmental Management",
        consortium: "Top trường nghiên cứu môi trường hàng đầu thế giới",
        url: "https://study.uq.edu.au"
      }
    ],
    benefits: [
      "100% học phí toàn khóa học (RTP Fee Offset trị giá 35.000 - 40.000 AUD/năm)",
      "Trợ cấp sinh hoạt phí: Khoảng 34.000 - 38.000 AUD/năm (miễn thuế, nhận theo chu kỳ 2 tuần)",
      "Bảo hiểm y tế du học sinh toàn diện (OSHC single coverage)",
      "Trợ cấp di chuyển và tái định cư lên tới 2.000 AUD",
      "Không yêu cầu 2 năm kinh nghiệm như học bổng AAS (Australia Awards)"
    ],
    profileMatch: {
      gpa: "GPA yêu cầu tương đương H2A hoặc First Class Honours (GPA 3.2/4.0 của Ngân Anh đạt ngưỡng xét tuyển).",
      ielts: "IELTS Academic 6.5 (không kỹ năng nào dưới 6.0).",
      experience: "Không yêu cầu kinh nghiệm làm việc bắt buộc. Tập trung vào năng lực nghiên cứu độc lập.",
      research: "BẮT BUỘC: Phải liên hệ và nhận được sự đồng ý hướng dẫn (Supervisor Agreement) từ một Giáo sư thuộc khoa Môi trường."
    },
    documents: [
      "Đề cương nghiên cứu chi tiết (Research Proposal 4-5 trang)",
      "Văn bản đồng ý tiếp nhận từ Giáo sư hướng dẫn (Email hoặc Giấy xác nhận Supervisor)",
      "Bảng điểm đại học và Bằng cử nhân có công chứng dịch thuật tiếng Anh",
      "Chứng chỉ IELTS Academic 6.5 trở lên",
      "CV học thuật mô tả chi tiết các đề tài nghiên cứu đã tham gia và kinh nghiệm làm việc",
      "2 Thư giới thiệu học thuật (Academic Referee Reports)"
    ],
    timeline: {
      open: "Mở quanh năm theo 2 đợt xét tuyển chính",
      deadline: "Đợt 1: 31/10 hàng năm (Nhập học giữa năm sau); Đợt 2: 31/05 hoặc 31/08 (Nhập học đầu năm sau)",
      interview: "Phỏng vấn trực tiếp với Giáo sư hướng dẫn",
      result: "8 - 12 tuần sau khi nộp đơn",
      departure: "Tháng 2 hoặc Tháng 7"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Tìm kiếm Giáo sư (Cold Emailing) (Tháng 5 - Tháng 8)",
        detail: "Vào danh sách giảng viên Khoa Môi trường tại ĐH Melbourne / UQ. Tìm 3-5 Giáo sư có cùng hướng nghiên cứu (quản lý tài nguyên, xử lý ô nhiễm), gửi email kèm CV và tóm tắt đề cương."
      },
      {
        step: "Bước 2: Phỏng vấn trực tiếp với Giáo sư & Xin Thư đồng ý (Tháng 8 - Tháng 9)",
        detail: "Trao đổi online với Giáo sư để thống nhất đề tài nghiên cứu. Nhận văn bản chấp thuận làm người hướng dẫn (Supervisor Approval)."
      },
      {
        step: "Bước 3: Nộp hồ sơ nhập học & Tích chọn xét học bổng RTP (Tháng 10)",
        detail: "Nộp hồ sơ trực tuyến qua cổng tuyển sinh sau đại học của trường, chọn ô 'Apply for Graduate Research Scholarships'."
      },
      {
        step: "Bước 4: Nhận Thư cấp học bổng & Thư mời nhập học vô điều kiện (Tháng 12 - Tháng 1)",
        detail: "Nhận Offer Letter và RTP Scholarship Award Letter từ Ban tuyển sinh trường."
      },
      {
        step: "Bước 5: Khám sức khỏe & Xin Visa du học Úc diện Nghiên cứu (Subclass 500) (Tháng 2 - Tháng 4)",
        detail: "Visa nghiên cứu sau đại học tại Úc được xét duyệt nhanh và có nhiều quyền lợi làm thêm linh hoạt."
      }
    ],
    strategyTips: "Đây là giải pháp thay thế hoàn hảo cho học bổng AAS (AAS bắt buộc 2 năm kinh nghiệm). Với RTP, chỉ cần bạn tìm được Giáo sư chịu nhận hướng dẫn đề tài của bạn là cơ hội nhận học bổng toàn phần lên đến 80-90%!"
  },
  {
    id: "tu-delft-van-effen",
    code: "TU-DELFT",
    name: "Justus & Louise van Effen Excellence Scholarships (TU Delft, Hà Lan)",
    country: "Hà Lan (Đại học Công nghệ Delft - Top 10 thế giới về Kỹ thuật)",
    region: "europe",
    type: "university",
    flag: "🇳🇱",
    badge: "100% Học phí + ~30.000 € Sinh hoạt phí / 2 năm",
    shortDesc: "Học bổng tài trợ toàn phần danh giá nhất của ĐH Công nghệ Delft cho sinh viên quốc tế xuất sắc theo học ngành MSc Environmental Engineering.",
    officialUrl: "https://www.tudelft.nl/en/education/practical-matters/scholarships/justus-louise-van-effen-excellence-scholarships",
    samplePrograms: [
      {
        name: "TU Delft - MSc in Environmental Engineering",
        consortium: "Chương trình kỹ thuật và quản lý môi trường hàng đầu châu Âu",
        url: "https://www.tudelft.nl"
      }
    ],
    benefits: [
      "100% học phí toàn phần cho chương trình Thạc sĩ 2 năm (~21.000 EUR/năm)",
      "Sinh hoạt phí: Trợ cấp chi phí sinh hoạt lên tới ~30.000 EUR cho 2 năm",
      "Tham gia Câu lạc bộ Học giả Van Effen (Van Effen Scholar Community) với các hội thảo phát triển kỹ năng lãnh đạo",
      "Được hỗ trợ toàn diện về chỗ ở và thủ tục visa Hà Lan"
    ],
    profileMatch: {
      gpa: "Yêu cầu GPA tích lũy tối thiểu 80% (tương đương 3.2/4.0). Hồ sơ Ngân Anh chạm ngưỡng tiêu chuẩn.",
      ielts: "IELTS Academic tối thiểu 7.0 (không kỹ năng nào dưới 6.5).",
      experience: "Không bắt buộc kinh nghiệm làm việc.",
      research: "Hồ sơ xét tuyển dựa trên bảng điểm cử nhân, bài luận học bổng và 2 thư giới thiệu chuẩn mực."
    },
    documents: [
      "Biểu mẫu đăng ký học bổng riêng của Quỹ Justus & Louise van Effen",
      "Bài luận học bổng (Scholarship Essay) trả lời các câu hỏi về giải pháp cho thách thức toàn cầu",
      "2 Thư giới thiệu học thuật từ giáo sư trường đại học cũ",
      "Chứng chỉ IELTS Academic (phải có sẵn điểm trước ngày 01/12)",
      "Bảng điểm đại học và Bằng cử nhân có công chứng dịch thuật tiếng Anh",
      "CV học thuật và Tóm tắt đồ án tốt nghiệp"
    ],
    timeline: {
      open: "Tháng 10 hàng năm",
      deadline: "01/12 hàng năm (HẠN CHÓT RẤT SỚM)",
      interview: "Không phỏng vấn (Xét duyệt hồ sơ trực tiếp)",
      result: "Cuối tháng 3 năm sau",
      departure: "Tháng 8 năm sau"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Chuẩn bị điểm IELTS 7.0 dứt điểm trước tháng 10",
        detail: "TU Delft bắt buộc có sẵn chứng chỉ tiếng Anh chính thức khi nộp đơn, không cho nộp bổ sung sau ngày 01/12."
      },
      {
        step: "Bước 2: Viết Bài luận học bổng Van Effen (Tháng 10 - Tháng 11)",
        detail: "Soạn thảo bài luận trả lời chi tiết: 'Nêu một vấn đề môi trường cấp bách tại Việt Nam mà bạn muốn giải quyết và công nghệ của TU Delft sẽ giúp bạn hiện thực hóa điều đó như thế nào?'."
      },
      {
        step: "Bước 3: Nộp toàn bộ hồ sơ qua cổng Studielink & Osiaan (Trước 01/12)",
        detail: "Tải toàn bộ tài liệu lên hệ thống Osiaan của TU Delft và nộp phí xét hồ sơ."
      },
      {
        step: "Bước 4: Nhận thông báo kết quả học bổng (Cuối tháng 3)",
        detail: "Hội đồng học bổng gửi thư chúc mừng và thỏa thuận học bổng."
      },
      {
        step: "Bước 5: Hoàn tất thủ tục Visa du học Hà Lan (MVV) & Thuê nhà (Tháng 5 - Tháng 7)",
        detail: "Nhà trường sẽ trực tiếp đứng ra làm thủ tục visa với Cục Xuất nhập cảnh Hà Lan (IND)."
      }
    ],
    strategyTips: "Hạn chót ngày 01/12 là cực kỳ gắt gao. Hãy chuẩn bị thư giới thiệu và thi IELTS trước tháng 10 để không bị lỡ hạn chót nộp đơn."
  },
  {
    id: "eth-zurich-esop",
    code: "ETH-ESOP",
    name: "Excellence Scholarship & Opportunity Programme (ESOP - ETH Zurich, Thụy Sĩ)",
    country: "Thụy Sĩ (ETH Zurich - Trường đại học số 1 châu Âu)",
    region: "europe",
    type: "university",
    flag: "🇨🇭",
    badge: "100% Học phí + 12.000 - 13.500 CHF/kỳ (~700 triệu VND/năm)",
    shortDesc: "Chương trình học bổng danh giá bậc nhất thế giới dành cho ứng viên đứng đầu khoa theo học Thạc sĩ tại Viện Công nghệ Liên bang Thụy Sĩ Zurich.",
    officialUrl: "https://ethz.ch/en/studies/financial/scholarships/esop.html",
    samplePrograms: [
      {
        name: "ETH Zurich - MSc in Environmental Sciences",
        consortium: "Chương trình khoa học môi trường hàng đầu thế giới với các chuyên ngành sâu về khí hậu, đất và nước",
        url: "https://usys.ethz.ch"
      },
      {
        name: "ETH Zurich - MSc in Environmental Engineering",
        consortium: "Kỹ thuật môi trường, quản lý rủi ro thiên tai và phát triển bền vững",
        url: "https://baug.ethz.ch"
      }
    ],
    benefits: [
      "100% học phí toàn bộ khóa học Thạc sĩ",
      "Sinh hoạt phí: 12.000 – 13.500 CHF/kỳ (~24.000 – 27.000 CHF/năm học, tương đương 650 – 750 triệu VND)",
      "Được làm việc trực tiếp với các nhà khoa học đoạt giải Nobel và giáo sư đầu ngành",
      "Môi trường nghiên cứu và cơ sở vật chất đứng hàng đầu thế giới"
    ],
    profileMatch: {
      gpa: "Yêu cầu nằm trong Top 10% sinh viên xuất sắc nhất của khóa tốt nghiệp cử nhân.",
      ielts: "IELTS Academic 7.0 - 7.5.",
      experience: "Không yêu cầu kinh nghiệm. Đánh giá dựa trên tư duy nghiên cứu lý thuyết và phương pháp luận.",
      research: "TÀI LIỆU THEN CHỐT: Một đề cương luận văn Thạc sĩ sơ bộ (Pre-proposal for Master's Thesis) độc lập và xuất sắc."
    },
    documents: [
      "Bản đề cương luận văn Thạc sĩ (Pre-proposal for Master's Thesis - theo cấu trúc riêng của ETH Zurich)",
      "Thư xác nhận xếp hạng tốt nghiệp cử nhân (Certificate of Ranking in Top 10%)",
      "Bảng điểm cử nhân và Bằng tốt nghiệp ĐH dịch thuật công chứng tiếng Anh",
      "2 Thư giới thiệu bảo mật từ giáo sư",
      "Chứng chỉ IELTS Academic 7.0 trở lên",
      "CV học thuật và Motivation Letter"
    ],
    timeline: {
      open: "01/11 hàng năm",
      deadline: "30/11 hàng năm (Chỉ mở đúng 30 ngày duy nhất)",
      interview: "Tháng 2 (nếu có)",
      result: "Cuối tháng 3 năm sau",
      departure: "Tháng 9 năm sau"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Chuẩn bị Đề cương Luận văn Thạc sĩ (Pre-proposal) (Tháng 7 - Tháng 10)",
        detail: "Tự viết một đề cương luận văn khoa học dài 3-4 trang theo chuẩn mực trích dẫn học thuật, chọn đề tài đột phá trong ngành Quản lý tài nguyên môi trường."
      },
      {
        step: "Bước 2: Xin Giấy xác nhận thứ hạng Top sinh viên tại trường ĐH (Tháng 9 - Tháng 10)",
        detail: "Xin Phòng Đào tạo ĐH TN&MT Hà Nội cấp giấy xác nhận điểm GPA và thứ hạng tốt nghiệp thuộc top đầu của khóa."
      },
      {
        step: "Bước 3: Nộp hồ sơ trên cổng điện tử eApply của ETH Zurich (01/11 - 30/11)",
        detail: "Upload toàn bộ hồ sơ trong vòng 30 ngày mở cổng. Cần kiểm tra kỹ từng mục vì ETH Zurich không nhận bổ sung tài liệu sau ngày 30/11."
      },
      {
        step: "Bước 4: Nhận kết quả từ Ủy ban Học bổng ESOP (Cuối tháng 3)",
        detail: "Hội đồng khoa học độc lập của ETH Zurich sẽ gửi thư thông báo kết quả."
      },
      {
        step: "Bước 5: Xin Visa Thụy Sĩ và Chuẩn bị lên đường (Tháng 5 - Tháng 8)",
        detail: "Làm thủ tục xin Visa du học Thụy Sĩ tại Đại sứ quán Thụy Sĩ tại Hà Nội."
      }
    ],
    strategyTips: "Pre-proposal là yếu tố sống còn tại ETH Zurich. Đề tài nên tập trung vào mô hình hóa (modeling) hoặc phân tích dữ liệu không gian trong quản lý môi trường."
  },
  {
    id: "wur-excellence",
    code: "WUR",
    name: "Wageningen University Excellence Programme (WUR, Hà Lan)",
    country: "Hà Lan (Đại học Wageningen - Trường ĐH Số 1 Thế giới về Nông nghiệp & Môi trường)",
    region: "europe",
    type: "university",
    flag: "🇳🇱",
    badge: "100% Học phí + Kinh phí Hội thảo Khoa học Quốc tế",
    shortDesc: "Đại học Wageningen được xếp hạng số 1 thế giới về Khoa học Môi trường (theo bảng xếp hạng QS World University Rankings).",
    officialUrl: "https://www.wur.nl/en/education-programmes/master/scholarships-grants-for-international-master-students/excellence-programme.htm",
    samplePrograms: [
      {
        name: "WUR - MSc Urban Environmental Management",
        consortium: "Chuyên sâu về quản lý đô thị sinh thái, xử lý nước và rác thải bền vững",
        url: "https://www.wur.nl"
      },
      {
        name: "WUR - MSc Environmental Sciences",
        consortium: "Chương trình toàn diện về chính sách, kinh tế và công nghệ môi trường",
        url: "https://www.wur.nl"
      }
    ],
    benefits: [
      "100% học phí toàn khóa học Thạc sĩ 2 năm (~40.000 EUR)",
      "Kinh phí tham gia các hội thảo khoa học quốc tế uy tín tại Châu Âu",
      "Cơ hội kết hợp ứng tuyển Quỹ Anne van den Ban Fund để nhận thêm tài trợ sinh hoạt phí hàng tháng",
      "Môi trường đào tạo chuyên sâu về môi trường đứng số 1 toàn cầu"
    ],
    profileMatch: {
      gpa: "Yêu cầu tốt nghiệp loại Giỏi (First Class Honours / GPA >= 80%). GPA 3.2 của Ngân Anh đạt ngưỡng yêu cầu.",
      ielts: "IELTS Academic 6.5 (các kỹ năng viết tối thiểu 6.0).",
      experience: "Không bắt buộc kinh nghiệm làm việc.",
      research: "Ứng viên nộp hồ sơ xin admission bình thường; nhà trường sẽ tự động chọn lọc hồ sơ xuất sắc nhất để gửi thư mời ứng tuyển học bổng."
    },
    documents: [
      "Hồ sơ xin nhập học Thạc sĩ WUR trên hệ thống Osiris",
      "Bảng điểm đại học và Bằng cử nhân có công chứng dịch thuật tiếng Anh",
      "Chứng chỉ IELTS Academic 6.5 trở lên",
      "CV học thuật và Thư trình bày động lực (Motivation Statement)",
      "2 Thư giới thiệu từ giảng viên trường đại học cũ"
    ],
    timeline: {
      open: "Tháng 10 hàng năm",
      deadline: "01/12 hoặc 01/02 hàng năm (Hạn chốt xin admission)",
      interview: "Tháng 2 - Tháng 3 (Trường gửi thư mời dự tuyển học bổng)",
      result: "Tháng 4 hàng năm",
      departure: "Tháng 8 hàng năm"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Nộp hồ sơ xin nhập học Thạc sĩ WUR sớm (Trước 01/12)",
        detail: "Nộp hồ sơ trên cổng tuyển sinh của trường Wageningen. Đảm bảo toàn bộ bảng điểm, bằng tốt nghiệp và IELTS đã sẵn sàng."
      },
      {
        step: "Bước 2: Nhận Thư mời nhập học không điều kiện (Unconditional Offer) (Tháng 1)",
        detail: "Khoa xét duyệt và cấp Unconditional Offer nếu hồ sơ đạt chuẩn học thuật."
      },
      {
        step: "Bước 3: Nhận thư mời tham gia xét tuyển Học bổng Excellence (Tháng 2)",
        detail: "Nếu bạn nằm trong top hồ sơ đầu vào, trường sẽ gửi email mời tham gia vòng xét tuyển học bổng riêng."
      },
      {
        step: "Bước 4: Nộp bài luận học bổng và Phỏng vấn (Tháng 2 - Tháng 3)",
        detail: "Hoàn thành bài tập tình huống hoặc phỏng vấn online với ban tuyển sinh WUR."
      },
      {
        step: "Bước 5: Nhận kết quả và Hoàn tất thủ tục visa du học Hà Lan (Tháng 4 - Tháng 6)",
        detail: "Làm thủ tục xác nhận nhập học và hoàn thiện hồ sơ cư trú."
      }
    ],
    strategyTips: "Vì Wageningen là cái nôi khoa học số 1 thế giới về Môi trường, tấm bằng thạc sĩ tại đây có giá trị học thuật và cơ hội định cư làm việc rất cao tại khối EU."
  },
  {
    id: "taiwan-moe",
    code: "TAIWAN-MOE",
    name: "Học bổng Bộ Giáo dục Đài Loan (Taiwan MOE Scholarship)",
    country: "Đài Loan (National Taiwan University - NTU, NCKU, Tsing Hua...)",
    region: "asia",
    type: "government",
    flag: "🇹🇼",
    badge: "Học phí 40.000 NTD/kỳ + Trợ cấp 20.000 NTD/tháng",
    shortDesc: "Học bổng toàn diện do Bộ Giáo dục Đài Loan cấp cho sinh viên Việt Nam theo học Thạc sĩ tại các trường đại học hàng đầu châu Á của Đài Loan.",
    officialUrl: "https://www.roc-taiwan.org/vn_vi/index.html",
    samplePrograms: [
      {
        name: "National Taiwan University (NTU) - MSc in Environmental Engineering",
        consortium: "Đại học Quốc gia Đài Loan - trường số 1 Đài Loan",
        url: "https://www.ntu.edu.tw"
      }
    ],
    benefits: [
      "Hỗ trợ học phí và một phần chi phí học tập: tối đa 40.000 NTD/kỳ",
      "Trợ cấp sinh hoạt phí hàng tháng: 20.000 NTD/tháng (~15.500.000 VND/tháng)",
      "Thời gian nhận học bổng Thạc sĩ: Tối đa 2 năm",
      "Chi phí sinh hoạt tại Đài Loan rất vừa phải, mức tài trợ này đảm bảo đời sống thoải mái"
    ],
    profileMatch: {
      gpa: "GPA yêu cầu từ Khá trở lên (GPA 3.2 của Ngân Anh rất có sức cạnh tranh).",
      ielts: "IELTS 6.0 - 6.5 trở lên (không bắt buộc biết tiếng Trung).",
      experience: "Không yêu cầu kinh nghiệm làm việc.",
      research: "Đánh giá qua Kế hoạch học tập (Study Plan) và thành tích học thuật."
    },
    documents: [
      "Đơn xin học bổng Bộ Giáo dục Đài Loan",
      "Bản sao giấy báo nhập học hoặc đơn xin nhập học vào trường ĐH tại Đài Loan",
      "Bảng điểm đại học và Bằng cử nhân có công chứng dịch thuật tiếng Anh hoặc tiếng Hoa",
      "Chứng chỉ IELTS Academic",
      "2 Thư giới thiệu từ giảng viên",
      "Kế hoạch học tập (Study Plan) viết bằng tiếng Anh"
    ],
    timeline: {
      open: "01/02 hàng năm",
      deadline: "31/03 hàng năm",
      interview: "Tháng 4 - Tháng 5 (Phỏng vấn tại TECO Hà Nội)",
      result: "Tháng 5 - Tháng 6 hàng năm",
      departure: "Tháng 9 hàng năm"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Nộp hồ sơ xin nhập học vào trường ĐH tại Đài Loan (Tháng 1 - Tháng 3)",
        detail: "Nộp hồ sơ trực tuyến vào Đại học Quốc gia Đài Loan (NTU) hoặc Đại học Quốc gia Thành Công (NCKU)."
      },
      {
        step: "Bước 2: Nộp hồ sơ học bổng MOE tại Văn phòng Đài Bắc (TECO Hà Nội) (01/02 - 31/03)",
        detail: "Gửi toàn bộ hồ sơ bản cứng đến Văn phòng Kinh tế và Văn hóa Đài Bắc tại Hà Nội."
      },
      {
        step: "Bước 3: Phỏng vấn tại Văn phòng Đài Bắc (Tháng 4 - Tháng 5)",
        detail: "Tham gia phỏng vấn bằng tiếng Anh trực tiếp tại văn phòng TECO."
      },
      {
        step: "Bước 4: Nộp Giấy báo nhập học chính thức (Trước 30/06)",
        detail: "Bổ sung giấy báo trúng tuyển của trường ĐH Đài Loan cho TECO để chốt danh sách nhận học bổng."
      },
      {
        step: "Bước 5: Nhận chứng nhận học bổng và Xin Visa (Tháng 7 - Tháng 8)",
        detail: "Nhận Certificate of Scholarship và làm thủ tục Visa du học cư trú tại Đài Loan."
      }
    ],
    strategyTips: "Học bổng Đài Loan MOE có thủ tục rất minh bạch, tỷ lệ cạnh tranh vừa phải và rất phù hợp làm phương án chắc chắn ('safe choice') bên cạnh các học bổng Châu Âu."
  },
  {
    id: "manaaki-new-zealand",
    code: "MANAAKI",
    name: "Manaaki New Zealand Scholarships",
    country: "New Zealand (Univ of Auckland, Lincoln Univ, Otago, Massey...)",
    region: "oceania",
    type: "government",
    flag: "🇳🇿",
    badge: "100% Học phí + Trợ cấp NZD 531/tuần + Vé máy bay",
    shortDesc: "Học bổng Chính phủ New Zealand tài trợ toàn phần cho các ngành ưu tiên về Biến đổi khí hậu (Climate Change) và Quản lý môi trường bền vững.",
    officialUrl: "https://www.nzscholarships.govt.nz",
    samplePrograms: [
      {
        name: "Lincoln University - MSc in Environmental Management",
        consortium: "Trường đại học chuyên biệt số 1 New Zealand về tài nguyên và môi trường",
        url: "https://www.lincoln.ac.nz"
      },
      {
        name: "University of Auckland - Master of Environmental Science",
        consortium: "Đại học top 1 New Zealand và top 70 thế giới",
        url: "https://www.auckland.ac.nz"
      }
    ],
    benefits: [
      "100% toàn bộ học phí khóa học Thạc sĩ",
      "Sinh hoạt phí cố định: 531 NZD/tuần (~35.000.000 VND/tháng)",
      "Trợ cấp ban đầu khi mới đến: 3.000 NZD",
      "Vé máy bay quốc tế khứ hồi và bảo hiểm y tế toàn diện",
      "Hỗ trợ vé máy bay về thăm nhà sau năm học đầu tiên"
    ],
    profileMatch: {
      gpa: "Yêu cầu GPA từ Khá trở lên (GPA 3.2/4.0 hoàn toàn đạt tiêu chuẩn).",
      ielts: "IELTS Academic tối thiểu 6.5 (không kỹ năng nào dưới 6.0).",
      experience: "YÊU CẦU ĐẶC BIỆT: Tối thiểu 1 năm kinh nghiệm làm việc toàn thời gian (hoặc 2 năm bán thời gian) - Ngân Anh hoàn toàn đáp ứng trọn vẹn điều kiện này!",
      research: "Cam kết quay trở về Việt Nam cống hiến ít nhất 2 năm sau khi hoàn thành khóa học."
    },
    documents: [
      "Hồ sơ ứng tuyển trực tuyến trên cổng New Zealand Scholarships Portal",
      "Bằng cử nhân và Bảng điểm ĐH dịch thuật công chứng tiếng Anh",
      "Xác nhận kinh nghiệm làm việc tối thiểu 1 năm từ cơ quan/doanh nghiệp",
      "Chứng chỉ IELTS Academic (6.5 trở lên)",
      "Bài luận trả lời các câu hỏi về đóng góp cho sự phát triển của Việt Nam"
    ],
    timeline: {
      open: "Đầu tháng 2 hàng năm",
      deadline: "Cuối tháng 2 hàng năm (Cổng chỉ mở 3-4 tuần)",
      interview: "Tháng 6 - Tháng 7",
      result: "Tháng 10 - Tháng 11",
      departure: "Tháng 1 - Tháng 2 năm sau nữa"
    },
    applicationRoadmap: [
      {
        step: "Bước 1: Kiểm tra tính hợp lệ trên cổng Eligibility Test (Tháng 1)",
        detail: "Vào trang chủ nzscholarships.govt.nz làm bài test đánh giá tư cách ứng tuyển."
      },
      {
        step: "Bước 2: Điền đơn trực tuyến & Viết bài luận phát triển bền vững (Tháng 2)",
        detail: "Trả lời các câu hỏi về thách thức biến đổi khí hậu / quản lý tài nguyên tại Việt Nam và cách New Zealand giúp bạn giải quyết."
      },
      {
        step: "Bước 3: Vòng thi trắc nghiệm tâm lý & tính cách (Psychometric Test) (Tháng 4)",
        detail: "Các ứng viên qua vòng hồ sơ sẽ làm bài kiểm tra trực tuyến về khả năng lãnh đạo và tư duy phản biện."
      },
      {
        step: "Bước 4: Phỏng vấn trực tuyến với Ban giám khảo New Zealand (Tháng 6 - Tháng 7)",
        detail: "Phỏng vấn trực tiếp bằng tiếng Anh để đánh giá cam kết cống hiến."
      },
      {
        step: "Bước 5: Nhận học bổng, Khám sức khỏe & Xin Visa (Tháng 10 - Tháng 12)",
        detail: "Nhận quyết định cấp học bổng chính thức từ Bộ Ngoại giao và Thương mại New Zealand."
      }
    ],
    strategyTips: "Manaaki New Zealand là một trong số rất ít học bổng chính phủ yêu cầu ĐÚNG 1 NĂM kinh nghiệm (trong khi AAS, Chevening, DAAD yêu cầu 2 năm). Do đó, Ngân Anh ở điểm rơi kinh nghiệm hoàn hảo nhất cho học bổng này!"
  }
];

// Dữ liệu học bổng cần >= 2 năm kinh nghiệm (Tham khảo cho tương lai)
const futureScholarships = [
  {
    name: "Australia Awards Scholarships (AAS - Úc)",
    requirement: "Yêu cầu tối thiểu 24 tháng (2 năm) làm việc toàn thời gian tại Việt Nam tính đến ngày nộp đơn.",
    note: "Có thể xem xét nộp sau khi đã tích lũy đủ 2 năm kinh nghiệm đi làm."
  },
  {
    name: "Chevening Scholarship (Anh Quốc)",
    requirement: "Quy định bắt buộc tối thiểu 2.800 giờ làm việc (tương đương 2 năm kinh nghiệm).",
    note: "Rất cạnh tranh, phù hợp là mục tiêu tiếp theo nếu muốn học thạc sĩ 1 năm tại Anh."
  },
  {
    name: "DAAD EPOS (Đức)",
    requirement: "Bắt buộc tối thiểu 2 năm kinh nghiệm công tác chuyên môn sau khi tốt nghiệp cử nhân.",
    note: "Miễn học phí và hỗ trợ sinh hoạt phí rất mạnh cho khối ngành kỹ thuật & quản lý tài nguyên."
  }
];

// Danh sách các checklist công việc theo từng giai đoạn
const masterChecklist = [
  {
    phase: "Giai đoạn 1: Chuẩn bị cốt lõi (Cuối 2026 - Đầu 2027)",
    tasks: [
      { id: "t1", text: "Ôn luyện và thi dứt điểm chứng chỉ IELTS Academic đạt target 7.0 (không kỹ năng dưới 6.5)", done: false },
      { id: "t2", text: "Tiếp cận 2-3 Giảng viên / Thầy Cô hướng dẫn khóa luận tại ĐH TN&MT Hà Nội xin cam kết viết Academic Recommendation Letters", done: false },
      { id: "t3", text: "Soạn thảo đề cương nghiên cứu khoa học sơ bộ (Research Proposal 3-5 trang) về Quản lý Môi trường / Biến đổi khí hậu tại Việt Nam", done: false },
      { id: "t4", text: "Thực hiện dịch thuật công chứng Bằng tốt nghiệp Cử nhân & Bảng điểm đại học sang tiếng Anh", done: false },
      { id: "t5", text: "Xin dấu Hợp pháp hóa lãnh sự (Cục Lãnh sự - Bộ Ngoại giao) sẵn sàng cho GKS Hàn Quốc, MEXT Nhật Bản", done: false }
    ]
  },
  {
    phase: "Giai đoạn 2: Đợt nộp đơn cao điểm 1 (Cuối 2027 - Đầu 2028)",
    tasks: [
      { id: "t6", text: "Nộp hồ sơ trực tuyến Erasmus Mundus Joint Masters (MESPOM, IMETE) trước ngày 10/01", done: false },
      { id: "t7", text: "Nộp hồ sơ xin admission và đề cử học bổng TU Delft Justus & Louise van Effen (Hà Lan) trước 01/12", done: false },
      { id: "t8", text: "Nộp hồ sơ xin đề cử France Excellence Eiffel qua trường đại học đối tác tại Pháp", done: false },
      { id: "t9", text: "Nộp hồ sơ học bổng Master Mind (Vùng Flanders, Bỉ) qua Ghent University hoặc KU Leuven", done: false },
      { id: "t10", text: "Nộp hồ sơ học bổng GKS-G (Hàn Quốc) kênh Đại sứ quán hoặc kênh trường ĐH (Tháng 2)", done: false },
      { id: "t11", text: "Nộp đơn học bổng Manaaki New Zealand Scholarships (Tháng 2)", done: false }
    ]
  },
  {
    phase: "Giai đoạn 3: Đợt nộp đơn cao điểm 2 & Phỏng vấn (Tháng 03 - Tháng 05/2028)",
    tasks: [
      { id: "t12", text: "Nộp hồ sơ học bổng MEXT Kênh Đại sứ quán Nhật Bản tại Hà Nội (Tháng 4 - Tháng 5)", done: false },
      { id: "t13", text: "Nộp hồ sơ học bổng Bộ Giáo dục Đài Loan (Taiwan MOE) tại TECO Hà Nội", done: false },
      { id: "t14", text: "Ôn tập thi viết tiếng Anh và tham gia phỏng vấn các vòng sơ tuyển (MEXT, GKS, Erasmus)", done: false },
      { id: "t15", text: "Liên hệ Giáo sư Nhật Bản xin Letter of Acceptance (LOA) sau khi vượt qua vòng 1 ĐSQ", done: false }
    ]
  },
  {
    phase: "Giai đoạn 4: Nhận kết quả, Xin Visa & Khởi hành (Tháng 06 - Tháng 09/2028)",
    tasks: [
      { id: "t16", text: "Nhận thư cấp học bổng chính thức từ Ủy ban tuyển sinh", done: false },
      { id: "t17", text: "Khám sức khỏe xuất cảnh theo tiêu chuẩn Lãnh sự quán nước sở tại", done: false },
      { id: "t18", text: "Nộp hồ sơ xin Visa du học (Student Visa) tại Đại sứ quán tương ứng", done: false },
      { id: "t19", text: "Đặt vé máy bay, liên hệ ký túc xá và chuẩn bị hành trang nhập học mùa Thu 2028", done: false }
    ]
  }
];
