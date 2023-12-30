# 지메일 활성화 방법
# 1. 지메일 홈페이지 -> 톱니바퀴(설정) -> 모든 설정 보기 -> 전달 및 POP/IMAP -> IMAP 사용    <= 변경.
# 2. Google 계정 관리 -> 보안(사이드바) -> 2단계 인증 -> 2단계 인증 사용 설정 후 제일 아래 앱 비밀번호 생성
my_account = "wjdfoek37@gmail.com" # 메일 보낼 이메일 주소
my_password = "lrrg wsct hjpx xfwo" # 생성한 앱 비밀번호 저장


import smtplib  # SMTP 사용을 위한 모듈
import re  # Regular Expression을 활용하기 위한 모듈
from email.mime.multipart import MIMEMultipart  # 메일의 Data 영역의 메시지를 만드는 모듈
from email.mime.text import MIMEText  # 메일의 본문 내용을 만드는 모듈
# from email.mime.image import MIMEImage  # 메일의 이미지 파일을 base64 형식으로 변환하기 위한 모듈

def sendEmail(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"  # 유효성 검사를 위한 정규표현식
    if re.match(reg, addr):
        smtp.sendmail(my_account, to_mail, msg.as_string())
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("받으실 메일 주소를 정확히 입력하십시오.")

# smpt 서버와 연결
gmail_smtp = "smtp.gmail.com"  # gmail smtp 주소
gmail_port = 465  # gmail smtp 포트번호. 고정(변경 불가)
smtp = smtplib.SMTP_SSL(gmail_smtp, gmail_port)

# 로그인
smtp.login(my_account, my_password)

# 메일을 받을 계정
to_mail = "wjdfoek3@naver.com"

# 메일 기본 정보 설정
msg = MIMEMultipart()
msg["Subject"] = f"첨부 파일 확인 바랍니다"  # 메일 제목
msg["From"] = my_account
msg["To"] = to_mail

# 메일 본문 내용
content = "안녕하세요. \n\n\
데이터를 전달드립니다.\n\n\
감사합니다\n\n\
"
content_part = MIMEText(content, "plain")
msg.attach(content_part)

# 받는 메일 유효성 검사 거친 후 메일 전송
sendEmail(to_mail)

# smtp 서버 연결 해제
smtp.quit()