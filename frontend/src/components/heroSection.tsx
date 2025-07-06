// // import ConnectButton from "./connectButton";

// // export default function HeroSection() {
// //   return (
// //       <section className="pt-32 min-h-screen px-6 md:px-10 lg:px-16 flex flex-col">
// //         <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
// //           <h1 className="leading-tight text-[var(--color-dark)]">
// //             <img
// //               src="/public/Transform.png"
// //               alt="Transform Your"
// //               className="w-full max-w-md sm:max-w-xl mb-2"
// //             />
// //             <img
// //               src="/public/digital.png"
// //               alt="Digital Presence"
// //               className="w-full max-w-md sm:max-w-xl"
// //             />
// //           </h1>

// //           <p className="mt-6 text-[var(--color-gray)] max-w-xl">
// //             <img src="/public/herosubtitle.png" alt="" />
// //           </p>

// //           <div className="mt-8 flex flex-col sm:flex-row gap-4">
// //             <ConnectButton to="/contact" label="LETS CONNECT" />
// //             <button className="bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-full shadow-sm">
// //               PLANS & PRICING
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //   );
// // }


// import ConnectButton from "./connectButton";

// export default function HeroSection() {
//   return (
//     <section
//       className="pt-32 min-h-screen px-6 md:px-10 lg:px-16 flex flex-col bg-[url('/gridimg.png')] bg-cover bg-center"
//     >
//       <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
//         <h1 className="leading-tight text-[var(--color-dark)]">
//           <img
//             src="/Transform.png"
//             alt="Transform Your"
//             className="w-full max-w-md sm:max-w-xl mb-2"
//           />
//           <img
//             src="/digital.png"
//             alt="Digital Presence"
//             className="w-full max-w-md sm:max-w-xl"
//           />
//         </h1>

//         <p className="mt-6 text-[var(--color-gray)] max-w-xl">
//           <img src="/herosubtitle.png" alt="Hero Subtitle" />
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//           <ConnectButton to="/contact" label="LETS CONNECT" />
//           <button className="bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-full shadow-sm">
//             PLANS & PRICING
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import ConnectButton from "./connectButton";

export default function HeroSection() {
  return (
    <section className="pt-32 min-h-screen px-6 md:px-10 lg:px-16 flex flex-col bg-[url('/gridimg.png')] bg-cover bg-center">
      <div className="border border-dashed border-gray-300 rounded-xl w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <h1 className="leading-tight text-[var(--color-dark)]">
            <img
              src="/Transform.png"
              alt="Transform Your"
              className="w-full max-w-md sm:max-w-xl mb-2"
            />
            <img
              src="/digital.png"
              alt="Digital Presence"
              className="w-full max-w-md sm:max-w-xl"
            />
          </h1>

          <p className="mt-6 text-[var(--color-gray)] max-w-xl">
            <img src="/herosubtitle.png" alt="Hero Subtitle" />
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <ConnectButton to="/contact" label="LETS CONNECT" />
            <button className="bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-full shadow-sm">
              PLANS & PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
