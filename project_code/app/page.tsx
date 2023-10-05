export default function Home() {
  return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[url('/banner.jpg')] bg-cover">
        <div className="relative w-full">
          <div className="carousel-item w-full">
            <h1 className="absolute justify-center top-1/2 left-1/2 bg-transparent p-2 text-white text-3xl z-10">
              Tutor Management Platform
            </h1>
          </div>
        </div>
      </main>
  )
}
