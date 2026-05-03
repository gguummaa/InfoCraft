// 번역 데이터
const translations = {
  en: {
    langName: "English (US)",
    mainText: "Capture every moment<br>that happens in your server!",
    mainText2: "Logs all server events, including message deletions, edits, joins, and leaves.",
    btnInvite: "Invite",
    btnFeatures: "See features",
    serverCount: "InfoCraft is currently being used on approximately 800 servers.",
    feature1Title: "Easily Check Within Discord",
    feature1Desc: "Have you ever felt it was a hassle to launch Minecraft just to check server or skin information? With InfoCraft, you can conveniently access a wide range of Minecraft information directly within Discord. It provides details such as server status, player skins, ore distribution, crafting recipes, and much more. InfoCraft also supports three languages—Korean, English, and Japanese—so anyone can use it comfortably.",
    feature2Title: "Various Recipes and Additional Features",
    feature2Desc: "InfoCraft presents a variety of information in an easy-to-understand way, including food recipes, enchantments, potions, and combat-related data. It also integrates with Discord to track your playtime, making it simple to see how long you've played. You can view playtime rankings among InfoCraft users, as well as rankings within your server. (To track playtime, Discord's 'Activity Status' must be enabled.)",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "Developer",
    footerTeam: "Team",
    footerPolicy: "Policies & Terms",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service"
  },
  ko: {
    langName: "한국어",
    mainText: "마인크래프트의 다양한 정보를<br>하나의 봇으로!",
    mainText2: "서버 상태, 플레이어 스킨, 광물 분포도, 제작법 등 많은 정보를 제공합니다.",
    btnInvite: "초대하기",
    btnFeatures: "기능 보기",
    serverCount: "현재 약 800개의 서버에서 InfoCraft를 사용하고 있어요",
    feature1Title: "디스코드 내에서 쉽게 확인",
    feature1Desc: "마인크래프트의 서버, 스킨을 확인하기 위해서 마인크래프트에 접속하는 것이 귀찮으셨나요. InfoCraft를 사용함으로써 디스코드 내에서 간편하게 마인크래프트의 다양한 정보를 확인할 수 있어요. 서버 상태, 플레이어 스킨, 광물 분포도, 제작법 등 많은 정보를 제공합니다. 또한, InfoCraft는 한국어, 영어, 일본어 총 3개의 언어를 지원하여 누구나 편하게 사용할 수 있어요.",
    feature2Title: "다양한 제작법과 별도 기능",
    feature2Desc: "음식 레시피, 인챈트 정보, 물약, 전투 등 다양한 제작법을 보기 쉽게 제공합니다. 또한 디스코드와 연동하여 플레이타임을 기록하여 자신이 얼마나 플레이했는지 알기 쉽게 제공합니다. 또한 InfoCraft를 사용하는 유저들간의 플레이타임 순위를 확인할 수도 있으며, 봇을 사용하는 서버 내 유저들간의 순위 또한 확인할 수 있어요. (플레이타임을 기록할려면 디스코드에서 '내 활동 공유' 가 켜져있어야합니다.)",
    supportserver: "서포트 서버",
    discordserver: "디스코드 서버",
    footerDev: "개발자",
    footerTeam: "팀원",
    footerPolicy: "정책 및 약관",
    footerPrivacy: "개인정보 보호 정책",
    footerTerms: "서비스 약관"
  },
  ja: {
    langName: "日本語",
    mainText: "サーバーで起こる<br>すべての瞬間を記録しましょう！",
    mainText2: "メッセージの削除・編集、入退室など、サーバーで発生するすべてのログを記録します。",
    btnInvite: "招待",
    btnFeatures: "機能を見る",
    serverCount: "InfoCraftは現在、約800のサーバーで使用されています。",
    feature1Title: "Discord内で簡単に確認",
    feature1Desc: "Minecraftのサーバー情報やスキンを確認するために、わざわざゲームを起動するのが面倒だと感じたことはありませんか？InfoCraftを使えば、Discord内でMinecraftのさまざまな情報を手軽に確認できます。サーバーの状態、プレイヤースキン、鉱石の分布、クラフトレシピなど、多くの情報を提供しています。また、InfoCraftは韓国語・英語・日本語の3つの言語に対応しており、誰でも快適に利用できます。",
    feature2Title: "多様なレシピと追加機能",
    feature2Desc: "食べ物のレシピ、エンチャント情報、ポーション、戦闘など、さまざまな情報を見やすく提供します。また、Discordと連携してプレイ時間を記録でき、自分がどれくらいプレイしたかを簡単に確認できます。さらに、InfoCraftユーザー同士のプレイ時間ランキングや、サーバー内ユーザーのランキングも確認可能です。（プレイ時間を記録するには、Discordの「アクティビティステータス」をオンにする必要があります。）",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "開発者",
    footerTeam: "チーム",
    footerPolicy: "ポリシーと規約",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約"
  }
};

// URL에서 언어 코드 가져오기
function getLangFromURL() {
  const path = window.location.pathname;
  const match = path.match(/\/(en|ko|ja)/);
  return match ? match[1] : 'en';
}

// 페이지 언어 업데이트
function updatePageLanguage(lang) {
  const t = translations[lang];
  
  document.getElementById('currentLang').textContent = t.langName + " ▼";
  document.getElementById('mainText').innerHTML = t.mainText;
  document.getElementById('mainText2').textContent = t.mainText2;
  document.getElementById('btnInvite').textContent = t.btnInvite;
  document.getElementById('btnFeatures').textContent = t.btnFeatures;
  document.getElementById('serverCount').textContent = t.serverCount;
  document.getElementById('feature1Title').textContent = t.feature1Title;
  document.getElementById('feature1Desc').textContent = t.feature1Desc;
  document.getElementById('feature2Title').textContent = t.feature2Title;
  document.getElementById('feature2Desc').textContent = t.feature2Desc;
  document.getElementById('support-server').textContent = t.supportserver;
  document.getElementById('discord-server').textContent = t.discordserver;
  document.getElementById('footerDev').textContent = t.footerDev;
  document.getElementById('footerTeam').textContent = t.footerTeam;
  document.getElementById('footerPolicy').textContent = t.footerPolicy;
  document.getElementById('footerPrivacy').textContent = t.footerPrivacy;
  document.getElementById('footerTerms').textContent = t.footerTerms;
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;
}

// 언어 변경
function changeLanguage(lang) {
  // 선택한 언어를 localStorage에 저장
  localStorage.setItem('preferred_language', lang);
  
  const currentPath = window.location.pathname;
  const basePath = currentPath.replace(/\/(en|ko|ja)/, '');
  const newPath = `/${lang}${basePath}`;
  
  window.location.href = newPath;
}

// 스크롤 함수
function scrollToServer() {
  const el = document.getElementById("server-section");
  const y = el.getBoundingClientRect().top + window.pageYOffset - 270;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

// 언어 메뉴 토글
function toggleLanguageMenu() {
  const menu = document.getElementById("language-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// 메뉴 외부 클릭시 닫기
document.addEventListener("click", function(e) {
  const langText = document.querySelector(".top-language-text");
  const menu = document.getElementById("language-menu");
  if (!langText.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// 페이지 로드시 언어 적용
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getLangFromURL();
  
  // 현재 언어를 localStorage에 저장 (마지막 방문 언어 기록)
  localStorage.setItem('preferred_language', currentLang);
  
  updatePageLanguage(currentLang);
  
  // 로고 링크 설정
  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.href = `/${currentLang}/`;
  }
});




















// 페이지 로드 시 로그인 상태 확인
async function checkLoginStatus() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    
    if (data.loggedIn) {
      updateUIForLoggedIn(data.user);
    } else {
      updateUIForLoggedOut();
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    updateUIForLoggedOut();
  }
}

// 로그인 상태일 때 UI 업데이트
function updateUIForLoggedIn(user) {
  const loginButton = document.getElementById('discord');
  const rightMenu = document.querySelector('.right-menu');
  
  // 로그인 버튼을 사용자 정보로 교체
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  userInfo.innerHTML = `
    <div class="user-dropdown">
      <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
           alt="Avatar" 
           class="user-avatar"
           onclick="toggleUserMenu()">
      <div id="user-menu" class="user-menu" style="display: none;">
        <div class="user-menu-header">
          <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
               alt="Avatar" 
               class="user-menu-avatar">
          <div>
            <p class="user-menu-name">${user.username}</p>
            <p class="user-menu-id">#${user.discriminator}</p>
          </div>
        </div>
        <div class="user-menu-divider"></div>
        <a href="/dashboard" class="user-menu-item">Dashboard</a>
        <a href="/logout" class="user-menu-item">Logout</a>
      </div>
    </div>
  `;
  
  loginButton.parentElement.replaceWith(userInfo);
}

// 로그아웃 상태일 때 UI 업데이트
function updateUIForLoggedOut() {
  // 기본 상태 유지
}

// 사용자 메뉴 토글
function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
  const userMenu = document.getElementById('user-menu');
  const userAvatar = document.querySelector('.user-avatar');
  
  if (userMenu && !event.target.closest('.user-dropdown')) {
    userMenu.style.display = 'none';
  }
});

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', checkLoginStatus);