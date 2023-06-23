import Header from "./components/Header";
import Blog from "./components/Blog";
import "./styles.css";

const blogData = [
  {
    id: 1,
    title: "First Post",
    teaser: "Some Teaser Text",
    text: "I know words. I have the best words."
  },
  {
    id: 2,
    title: "Second Post  ",
    teaser: "Other teaser Text",
    text: "Despite the constant negative ipsum covfefe"
  },
  {
    id: 3,
    title: "3rd Message",
    teaser: "More Teasers",
    text:
      "We have so many things that we have to do better... and certainly ipsum is one of them."
  }
];

export default function App() {
  return (
    <div>
      <Header />
      <Blog blogData={blogData} />
    </div>
  );
}
