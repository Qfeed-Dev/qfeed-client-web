import { Metadata } from "next";
import BasicQuestion from "src/components/pages/home/BasicQuestion";
import HomeTitle from "src/components/pages/home/HomeTitle";
import Spacing from "src/components/Spacing";
import "./Home.scss";

// export const metadata: Metadata = {
//   title: "My Page Title",
// };

export default function Page() {
  return (
    <div className="home-wrapper">
      <HomeTitle />
      <Spacing size={16} />
      <BasicQuestion type="pick-me" />
      <Spacing size={16} />
      <BasicQuestion type="question" />
      <Spacing size={20} />

      {/* 최신순 인기순 */}
      <Spacing size={14} />
    </div>
  );
}
