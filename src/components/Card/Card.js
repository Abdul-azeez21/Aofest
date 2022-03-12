import React from "react";
import "../Card/card.css";
const Card = () => {
  function clickme() {
    console.log("my name is barry allen");
  }
  const cardfInfo = [
    {
      id: 1,
      image: "",
      title: "calis",
      semititle: "Aofest",
      about: "lorm",
      text1: "lorem",
      text2: "powoe",
      text3: "powss",
    },
    {
      id: 2,
      image: "",
      title: "calis",
      semititle: "Aofest",
      about: "lorm",
      text1: "lorem",
      text2: "powoe",
      text3: "powss",
    },
  ];

  const rederCard = (card, index) => {
    return (
      // <div className="flex">
      //   <div className="cards" key={index}>
      //     <div className="card-container">
      //       <div className="imagecont">
      //         <img
      //           src={card.image}
      //           alt=""
      //           style={{ height: "250px", width: "320px" }}
      //         />
      //       </div>
      //       <div className="textcont">
      //         <div className="Headercont">{card.title}</div>
      //         <div className="bodycont">{card.about} Hostel</div>
      //         <div className="pricecont">{card.semititle}</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div class="container my-12 mx-auto px-4 md:px-12" key={index}>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full  hover:scale-110 transition duration-300 ease-in-out"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    {card.title}
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full "
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full hover:scale-110 transition duration-300 "
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    {card.title}
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full hover:scale-110 transition duration-300"
                  src="https://picsum.photos/600/400/?random "
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    {card.title}
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </div>
    );
  };

  return <div>{cardfInfo.map(rederCard)}</div>;
};

export default Card;
