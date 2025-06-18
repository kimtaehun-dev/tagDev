import './Footer.css';

// 빌드 시점의 날짜를 포맷팅하는 함수
const formatBuildDate = () => {
  const buildDate = new Date(process.env.BUILD_DATE || new Date().toISOString());
  const year = buildDate.getFullYear();
  const month = String(buildDate.getMonth() + 1).padStart(2, '0');
  const day = String(buildDate.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export default function Footer(){
  return (
    <footer>
      <p>Copyright© 2024. Tae Hun Kim. All rights reserved</p>
      <p className="last-update">Last Update: {formatBuildDate()}</p>
    </footer>
  )
}