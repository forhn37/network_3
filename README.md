# network_3
network -3 | 문서에서 처리해주는 사용자의 요청처리

일반 사용자가 요청을 진행하는 일에는 '최초 접속'에 해당하는 것도 존재하지만, 무언가 '데이터를 입력하는' 것도 요청을 통해 서버에게 전달합니다.
마치 김밥천국 분식집에서 메뉴를 체크 하는 '주문서' 처럼 어떠한 양식을 제작하여 틀을 만들어두면, 서버를 관리하는 개발측에서는 '양식'으로서 이를 받아 볼 수 있습니다. 원하는 데이터를 매번 주소창(url 입력부분)에서 불편하게 작성하기는 어렵기에, 문서 내에서 태그로서 마련되어있는 매우 익숙한 사용자 경험이 존재합니다. 바로 로그인 인터렉션(상호작용)이 여기에 해당합니다.

사용자가 ID와, 비밀번호를 입력한뒤, 제출을 누르면 어떠한 요청 방식을 확인하고 서버에 전달하게 되는데, 이러한 사항도 문서를 서빙해주는 서버가 하는 대표적인 일 중 하나입니다.(실제적인 활용에서는 로그인데이터는 절대로 GET요청으로 처리하지 않습니다.) 문서 내부에 장착, 사용자가 편하게 요청처리 할 수 있도록 마련한다는 맥락이므로, 현재 작업 구현하고 있는 서버에 해당 문서태그(form)를 작성하여 어떤 요청이 오는지 확인해보시기 바랍니다.
