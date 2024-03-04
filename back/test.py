import smtplib  # SMTP 사용을 위한 모듈
import re  # Regular Expression을 활용하기 위한 모듈
from email.mime.multipart import MIMEMultipart  # 메일의 Data 영역의 메시지를 만드는 모듈
from email.mime.text import MIMEText  # 메일의 본문 내용을 만드는 모듈
# from email.mime.image import MIMEImage  # 메일의 이미지 파일을 base64 형식으로 변환하기 위한 모듈

class mail :
    def __init__(self) :
        self.my_account = "wjdfoek37@gmail.com" # 메일 보낼 이메일 주소
        self.my_password = "lrrg wsct hjpx xfwo" # 생성한 앱 비밀번호 저장
        self.to_mail = "wjdfoek3@naver.com" #메일 받을 계정

    def sendEmail(self, addr, smtp, msg):
        reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"  # 유효성 검사를 위한 정규표현식
        if re.match(reg, addr):
            smtp.sendmail(self.my_account, self.to_mail, msg.as_string())
            print("정상적으로 메일이 발송되었습니다.")
        else:
            print("받으실 메일 주소를 정확히 입력하십시오.")

    def make_content(self, data):
        # smpt 서버와 연결
        gmail_smtp = "smtp.gmail.com"  # gmail smtp 주소
        gmail_port = 465  # gmail smtp 포트번호. 고정(변경 불가)
        smtp = smtplib.SMTP_SSL(gmail_smtp, gmail_port)

        # 로그인
        smtp.login(self.my_account, self.my_password)

        # 메일 기본 정보 설정
        msg = MIMEMultipart()
        msg["Subject"] = f"새로운 제품 요청"  # 메일 제목
        msg["From"] = self.my_account
        msg["To"] = self.to_mail

        # 메일 본문 내용
        content = f"""
            작업 반경(mm) : {data['r']},\n
            작업 높이(mm) : {data['h']},\n
            공작물 무게(kg) : {data['w']},\n
            공작물 재질 : {data['t']},\n
            공작물 개수 : {data['c']},\n
            제품 타입 : {data['type']},\n
            기타 요청 사항 : {data['e']},\n
            연락처 : {data['p']}
        """
        
        content_part = MIMEText(content, "plain")
        msg.attach(content_part)

        # 받는 메일 유효성 검사 거친 후 메일 전송
        self.sendEmail(self.to_mail, smtp, msg)

        # smtp 서버 연결 해제
        smtp.quit()