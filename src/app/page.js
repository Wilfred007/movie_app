import requests from "@/Request";
import Main from "@/component/Main";
import Row from "@/component/Row";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Main />
      <Row title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row title='Popular' fetchUrl={requests.requestPopular} />
      <Row title='Trending' fetchUrl={requests.requestTrending} />
      <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
    </div>
  );
}
