function updatePage() {
  var selectBox = document.getElementById("options");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var playerDiv = document.getElementById("player");
  var contentDiv = document.getElementById("content");
  var audios = document.getElementsByTagName("a"); // 모든 오디오 요소를 선택

  // Clear previous content
  contentDiv.innerHTML = "";

  for (var i = 0; i < audios.length; i++) {
    // 각 오디오 요소에 대해
    //audios[i].pause(); // 오디오 정지
    //audios[i].currentTime = 0; // 오디오 재생 위치를 초기 위치로 돌림
    audios[i].style.display = "none"; // 모든 오디오 요소를 보이지 않게 함
  }
  // Update content based on selected option
  switch (selectedValue) {
    case "option1":
      audio1.style.display = "block";
      contentDiv.innerHTML = option1_text;
      break;
    case "option2":
      audio2.style.display = "block";
      contentDiv.innerHTML = option2_text;
      break;
    case "option3":
      audio3.style.display = "block";
      contentDiv.innerHTML = option3_text;
      break;
    case "option4":
      audio4.style.display = "block";
      contentDiv.innerHTML = option4_text;
      break;
    case "option5":
      audio5.style.display = "block";
      contentDiv.innerHTML = option5_text;
      break;
    case "option6":
      audio6.style.display = "block";
      contentDiv.innerHTML = option6_text;
      break;
    case "option7":
      audio7.style.display = "block";
      contentDiv.innerHTML = option7_text;
      break;
    case "option8":
      audio8.style.display = "block";
      contentDiv.innerHTML = option8_text;
      break;
    case "option9":
      audio9.style.display = "block";
      contentDiv.innerHTML = option9_text;
      break;
    case "option10":
      audio10.style.display = "block";
      contentDiv.innerHTML = option10_text;
      break;
    default:
      //audio1.style.display = "none";
      contentDiv.innerHTML = default_text;
  }
}

var option1_text = `
<div style="padding:20px 0;margin:0;">
<h2>나의 뒷모습을 보고</h2>
<p>늘 주변 사람들이 말했다.<br/> 
"애고, 왜 이렇게 말랐어요?"<br/> 
등을 어루만지며 어깨를 쓰다듬으며<br/>
"살 좀 쪄야겠어요."<br/>  
나의 등 사진을 찍어서 보는 건 처음이다.<br/> 
말랐다. 사람들이 왜소해 보인다고<br/> 
하는 말이 맞는 것 같네.<br/>  
한쪽으로 약간 치우친 내 등,<br/>  
참으로 오랫동안<br/> 
무거운 짐을 지고 있었던 나의 등.<br/>
부모님 댁에 갔다가<br/> 
내가 사는 집으로 돌아가는 길,<br/> 
멀리 내 모습이 사라질 때까지<br/> 
손을 흔들며 계속 바라보셨을<br/>
부모님 마음이 오버랩된다.<br/> 
가족을 위해 청춘을 바쳐 열심히 일했던,<br/> 
이제는 세월이 많이 흘러<br> 조금씩 늙어 가고 있는<br/> 
큰딸의 불편한 다리와 뒷모습을 보며<br/> 
우리 부모님의 마음은 어떠셨을까.<br/> 
짐작하건대 "가엽다, 저 몸을 가지고 <br/>
가족을 위해 일만 하고 희생한 내 큰 딸.”<br/>
눈물도 흘리셨겠지.<br/> 
많이 극복했다고 생각하지만, <br/> 
가끔 문득 가슴을 파고드는 나에 대한 연민이,<br/> 
내 마른 뒷모습을 보니 더 깊어지다가 <br/> 
훅, 하고 들어오는 나를 향한 <br/>
한없는 위로와 격려로 토닥여주고 싶다.<br/> 
내가 나를 안아 주지는 못하지만, <br/> 
그래도 나를 꼭 안아 주고 싶다.<br/> 
  "백허그, 로!"</p></div>`;

var option2_text = `
<div style="padding:10px 0;margin:0;">
<h2>세상에서 가장 소중한<br/>나를 소개합니다</h2>
<p>나는 인성이 부족하다고 생각해서,<br/>
인성이 좋은 사람이 되는 것을 추구하며 삽니다.<br/> 
원래는 인내심 있고 끈기있는 사람이었는데,<br/> 
약을 먹기 시작하면서 게으르고 인내심 없고<br/> 
작은 충격에도 부서지는 사람으로 변했어요.<br/>
이런 평상시에 무표정한 얼굴인데<br/> 
많이 웃으려고 하죠.<br/> 
스트레스에 쌓인 일상에서<br/>
우연히 동네에 있는 아차산에 갔는데,<br/> 
너무 좋아서 4년 전부터 주 3회<br/>
아차산에 다니게 되었습니다.<br/> 
집에 있을 때는<br/> 음악 듣기, 독서, TV 시청 등을 하며<br/>
세상과 소통하며 살려고 합니다. <br/>
인성에 도움이 될 거 같아서 하루에 30분 정도<br/> 
《성경》과 《탈무드》를 소리 내어 읽습니다.<br/> 
남들이 나를 볼 때<br/> 
“잠수 자주 탄다.”, “변덕이 있다.”고 합니다. <br/>
좋게 봐 주시는 분도 있고<br/> 안 좋게 봐 주시는 분도 있습니다.<br/> 
사람들에게 선물 주는 걸 좋아했는데<br/> 
요즘은 선물 주는 것보다 사람들에게<br/>
제 마음을 주려고 합니다.<br/> 
마음이 중요하니까요.</p></div>`;

var option3_text = `
<div style="padding:10px 0;margin:0;">
<h2>나의 회사 생활과 개인 생활</h2> 
<p>회사에서의 출근길과 퇴근길은<br/> 
힘들고 지친 몸을 이끌고 많은 군중 속에서<br/> 
버스와 지하철을 타고 하루를 시작하고<br/> 또 마무리하는 시간이다. <br/> 
요즘 피로가 많이 쌓이고<br/> 
꾸벅꾸벅 조는 일이 많다.<br/> 
피로를 풀기 위해 회사에 비치된 <br/>
커피머신에서 아메리카노를 내려 한 잔 마신다.<br/>  
커피머신뿐만 아니라 스낵도 있다.<br/> 
스낵은 스트레스를 풀기 위해 먹는다.<br/> 
하지만 단점은 살이 찔 수도 있다는 거, <br/> 
그래도 먹고 또 먹는다. <br/> 
안 먹고 살 수는 없으니까.<br/> 
이만한 회사가 어디에 또 있을까?<br/> 
회사 밖에서는<br/> 
헬스장에서 운동을 하거나 카페를 간다.<br/> 
헬스장에서 빡세게(?) 운동하고 나면<br/> 
몸이 가벼운 느낌이 든다.<br/> 
카페를 가는 건 바로<br/>  
카공(카페에서 공부)을 하러 가거나
<br/>그냥 쉬러 가는 것뿐.<br/>  
그래서 나는 마시고 쉬고<br/> 
공부할 수 있는 카페가 좋다.<br/> 
오늘도 카페 가고 "운동"</p></div>`;

var option4_text = `
<div style="padding:10px 0;margin:0;">
<h2>동행</h2> 
<p><strong>서울</strong>은 별세상이다.<br/>  
참 예측하기 어려운 상황들이 툭툭 벌어진다.<br/> 
그래서 무거운 뉴스를 보기보다<br/> 
가벼운 내용의 곡과 유튜브를 많이 보게 된다.<br/> 
그러다 우연히 <동행>이라는 프로를 보게 됐다. <br/> 
부모님은 돌아가셨다. <br/> 
두 형제가 가족의 전부인데<br/>
형이 입영통지서를 받아<br/>
어린 동생이 혼자 남겨져야 하는 상황이었다. <br/> 
두 형제의 생활하는 모습이 방영되면서<br/> 
시청자들의 공감을 샀고<br/> 
형이 군대를 면제받을 수 있도록<br/> 
하라는 목소리가 커졌다.<br/> 
보는 내내 <strong>가난</strong>하지만 <br/> 
두 형제의 서로를 의지하고<br/> 
<strong>다솜</strong>하는 모습을 보며<br/>
서로 의지하며 이겨내는 <br/> 
작지만 아름다운 <strong>나무</strong>를 보듯<br/>
<strong>웃음</strong>이 머금어졌다.<br/> 
이제 스무 살인 형과 어린 동생이<br/> 
이 세상 속에 잘 뿌리내리길.<br/>
<strong>서리</strong> 내리는 겨울에도 굴하지 않기를.<br/> 
두 손 모아 <strong>기도</strong>해본다.</p></div>`;

var option5_text = `
<div style="padding:10px 0;margin:0;">
<h2>시계와 시간</h2> 
<p>나는 손목시계를 좋아한다. <br/> 
롤XX니 파텍XX이니 뭐 그런 비싼 시계 말고<br/> 
날짜, 시간, 요일만 분명한 실용적인 시계가 좋다.<br/>  
시계가 있으면 약속 시간에 늦지 않게<br/>
계획적으로 시간을 분배할 수 있어서 좋다.<br/>  
하지만 때론 문득 시계에<br/>
끌려간다는 생각이 들 때도 있다.<br/> 
충분히 느긋하게 운용할 수도 있지만<br/>
±5분, 10분 혹은 딱 맞춰서 무엇이든 하려다 <br/> 
보면 차라리 ‘시계’를 일찍 빠르게 감아 놓는다.<br/>
째깍, 째깍, 째깍…… 마찬가지인 것 같다.<br/> 
나의 디자인 마감일은 시계처럼<br/>
오전에 공지가 올라온다.<br/> 
마감일 D-8, 오늘은 일까지 마감.<br/> 
그러면 마감하기 바쁘다.<br/>
하지만 마감일은 손목시계처럼<br/>
당길 수 없으니 자의적, 능동적이지 못한 나는<br/> 
마감일까지 딱!<br/>
거기까지(솔직히 좀, 더 하지만) 한다.<br/>
넉넉하게 나와 마감일+2일 정도 속력을 내보자.<br/> 
사랑한다. 아자아자, 파이팅이다!</p></div>`;

var option6_text = `
<div style="padding:10px 0;margin:0;">
<h2>백조의 호수</h2> 
<p><strong>1. 내 과거 중 특별한 사건</strong><br/> 
예기치 않은 사고로 인한 뇌출혈. <br/> 
이 치명적인 후유증으로 삶이 180도 바뀌면서<br/> 
뇌 손상이라는 게 얼마나 무서운지<br/> 
느끼게 해 준 사건.</p><br/> 
<p><strong>2. 나를 보여 줄 수 있는 내 인생의 한 컷</strong><br/> 
장애인과 비장애인의 삶이 얼마나 다른 것인지,<br/> 
수많은 시행착오를 겪으며, 시행착오 속에서<br/>
인생을 배워 가는 것이 소중한 교훈같다.</p><br/>
<p><strong>3. 내 인생의 어둠과 빛</strong><br/>
자유로이 움직일 수 있었던 짧은 6년의 삶과<br/>
지금까지 이어져 온 반신불수의 어둠과 빛은<br/> 
그야말로 살얼음을 걷는 것 같다.</p><br/> 
<p><strong>4. 내 인생의 노란 카드<br/> 
(지우고 싶지만 그 또한 나)</strong><br/>
뇌 손상으로 인한 난독증으로<br/> 
배움의 끈이 짧은 것.<br/> 
지우고 싶지만, 그 또한 나이기에<br/>
배움의 끈이 짧은 단점을<br/> 
장점으로 커버할 수 있도록<br/>
계속 노력하며 살아가고 싶다.</p></div>`;

var option7_text = `
<div style="padding:10px 0;margin:0;">
<h2>별</h2> 
<p>나는 나를 충분히 사랑하지 못한다.<br/> 
상당히 오래전부터<br/> 
이런 생각을 가지고 살아왔는데,<br/> 
문득 나에게 미안해지기 시작했다. <br/> 
그다음으로는 부모님,<br/> 
나를 사랑하는 사람들에게 미안했다.<br/> 
그 후로 노력 중이다. <br/> 
나 자신, 그리고 내 주변 사람들을 위해서...<br/> 
나의 아픔을 외면하지 말고<br/> 
기쁨은 아낌없이 누리자.<br/> 
나는 매 순간 빛난다.<br/>
어제보다 오늘 더 빛나고,<br/> 
오늘보다 내일 더 빛날 거다.<br/> 
누가 뭐라 해도 나를 아끼고 사랑하자!<br/> 
이 글을 읽고 있는 모두 스스로 빛나고 있습니다.<br/>
아낌없이 본인을 사랑해 주세요!</p></div>`;

var option8_text = `
<div style="padding:10px 0;margin:0;">
<h2>오늘 바라는 내, 일</h2> 
<p>새롭게 배우는 업무가 쉽지 않지만,<br/> 
꿋꿋이 도전하는 청년.<br/> 
장애인 팀원들과 함께 소통하며<br/> 
일을 해 나가는 모든 순간이 새롭다.<br/> 
화면 꺼진 휴대폰에서 소리로만<br/> 
문자를 확인하는 모습이 이제 익숙하다.<br/>
새로운 업무이지만<br/>
팀원들의 격려와 도움 속에 계속 도전해 나간다.<br/> 
배움에 열려 있는 한 나이는 중요하지 않다.<br/>
매번 새롭게 도전하고 시작할 수 있다.<br/> 
장애도, 나이도 그 무엇도 삶에,<br/> 
새로운 도전에 장애물이 될 수 없다.<br/>
일, 내일, 내 일.<br/> 
하루 중 많은 시간을 보내는 일터.<br/>
그래도 웃어야 행복한 순간이 올 것이라 믿는다.</p></div>`;

var option9_text = `
<div style="padding:10px 0;margin:0;">
<h2>내 눈에 보이지 않는 것</h2> 
<p>우린 항상 앞만 본다네<br/> 
아무리 높은 산이 있다 해도<br/>
저 너머가 바다로 덮여 있어도<br/> 
우리는 항상 앞만 본다네 <br/> 
그렇게 앞을 보면서 걷다 보니<br/>
온 세상을 돌아다녔다네 <br/> 
하지만 온 세상을 보았지만<br/>
유일하게 보지도 가보지 못한 곳이 있다네 <br/> 
그곳을 보는 방법은 스스로 모른다네<br/> 
다른 사람에 의해 찾아낼 수 있지만<br/> 
스스로 갈 수는 없다네 <br/> 
오직 상상으로 볼 수밖에 없다네 <br/> 
항상 스스로에게 씩씩하게<br/> 
항상 스스로에게 친절하게 대해 준다면 <br/> 
다른 사람의 눈에도 그렇게 보일 테니<br/>
든든한 그 모습을 모두의 눈에 보이게 하라</p></div>`;

var option10_text = `
<div style="padding:10px 0;margin:0;">
<h2>강 팀장의 이중생활</h2> 
<p><h3>10시-19시 : 링키지랩 곤 팀장</h3> 
• 승진에 욕심이 있는 팀장 <br/> 
• 오픈 멤버로서의 프라이드<br/> 
• 장애인 고용의 전문가가 되고 싶음<br/> 
→ 사회복지사 공부 중(사이버 대학)<br/> 
• 퇴근을 기다리는 중<br/> 
• 조연 : 링키지랩 동료들,<br/> 
대표님, 데이빗, 제이크,<br/> 
스텔라, 에리카, 벨라, 케빈, 율, 엘라</p> 
<h3>19시 이후~10시 + 주말 :<br/>
근철, 뮤지컬 배우(에브너 / 구씨)</h3> 
<p>• 아침잠이 많다.<br/> 
• 어릴 적엔 소심하고 내향적(INFP)<br/> 
→ 다양한 알바 + 공익근무 생활로<br/> 
외향적이 됨(ENTP)<br/> 
• 퇴근 후 살사 배움(2년 차)<br/> 
• 작년 동호회에서 뮤지컬 두 편 출연<br/> 
• 취미 부자<br/> 
• 스노클링, 수영 2개월(자유형 어렵 T.T)<br/> 
• 그 외 집 꾸미기, 요리, 하이볼 만들기<br/> 
(위스키에 관심 UP!)<br/> 
• 조연: 극단 동료들 단장, 연출, 부연출, 나영,<br/> 
솔롱고, 희정 엄마, 페기, 도로시, 빌리, 줄리안</p></div>`;

var default_text = `<div style="padding:10px 0;margin:0;">
<p>선택하신 작가가 없습니다.</p>`;
