import requests from "@/Request";
import Main from "@/component/Main";
import Row from "@/component/Row";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchUrl={requests.requestTrending} />
    </div>
  );
}
