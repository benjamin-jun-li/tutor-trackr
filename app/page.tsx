// import Image from 'next/image'
//
// export default function Home() {
//   return (
//     <div className="">
//       <div className="carousel w-full">
//         <div id="item1" className="carousel-item w-full">
//           <img src="/banner.jpg" className="w-full" />
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from 'next/image'

export default function Home() {
  return (
      <div className="">
        <div className="relative w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="/banner.jpg" className="w-full" alt="Banner" />
            <div className="absolute justify-center top-1/2 left-1/2 bg-transparent p-2 text-white text-3xl z-10">
              Tutor Management Platform
            </div>
          </div>
        </div>
      </div>
  )
}
