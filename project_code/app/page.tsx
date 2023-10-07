export default function Home() {
  return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[url('/banner.jpg')] bg-cover">
        <div className="relative w-full">
          <div className="carousel-item w-full grid grid-cols-1 ml-[25%]">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
              Tutor Management Platform
            </h1>
            <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                Here at out platform, we focus on online learning where technology, innovation could launch your career.
            </p>
          </div>
        </div>
      </main>
  )
}
