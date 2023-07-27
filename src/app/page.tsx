import { Metadata } from "next";
import HomeTitle from "src/components/pages/home/HomeTitle";
import { styled } from "styled-components";
import "./Home.scss";

// export const metadata: Metadata = {
//   title: "My Page Title",
// };

export default function Page() {
  return (
    <div className="home-wrapper">
      <HomeTitle />
    </div>
  );
}
