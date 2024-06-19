import Image from "next/image";
import Guitar from "@/app/assets/guitar.svg";
import j from "@/app/assets/J3PI3RR3.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 sm:px-24 py-12 bg-white">
      <section className="my-10 sm:w-1/2">
        <header className="flex items-center gap-3 mb-3">
          <div>
            <h1 className="text-3xl font-bold">About Me</h1>
          </div>
          <Image
            src={Guitar}
            width={30}
            height={30}
            alt="..."
            className="select-none pointer-events-none"
          />
        </header>
        <article className="relative">
          <figure className="float-right ml-4 mb-4">
            <Image
              src={j}
              width={200}
              height={200}
              alt="12"
              className="rounded-full shadow-lg shadow-fuchsia-500 w-24 sm:w-[200px]"
            />
          </figure>
          <p className="text-gray-600 tex">
            Hello! I'm Jean, the best Front developer. I have been lucky enough
            to have worked on some projects related to Frontend, interface and
            product design. I always seek to enjoy other perspectives and
            diverse experiences to improve my knowledge and create for myself
            and those around me.
          </p>
          <p>
            <br />
          </p>
          <p className="text-gray-600">
            Thank you for spending some time to get to know me and my work! I'd
            love to chat some more, you can find me through email, Instagram, or
            LinkedIn! Find my links down below!
          </p>
        </article>
      </section>
      <hr className="bg-black w-full" />
      <section className="w-full my-10 flex justify-around">
        <article className="max-w-1/2">
          <header>
            <h1 className="font-bold text-xl sm:text-3xl mb-5">
              Work <br />
              experience
            </h1>
          </header>
          <div>
            <h3 className="font-mono">Apr 2024-Current</h3>
            <h2>Frontend developer</h2>
            <h4>
              <strong>COINS</strong>
            </h4>
          </div>
        </article>
        <article>
          <header>
            <h1 className="font-bold text-xl sm:text-3xl mb-5">Skills</h1>
          </header>
        </article>
      </section>
    </main>
  );
}
