export default function Mail(){
    return (
        <div className="relative flex h-20 items-center justify-center  bg-[#C3FA4F]  w-[100%]">
        <div className="absolute h-20 bottom-2 right-2 flex flex-col md:flex-row md:gap-3 items-center justify-center  w-[100%] border-black border-2 bg-white ">
            <p className="bg-white text-xl">Contact me by mail :</p>
            <a
              className="bg-white font-[Play] text-xl font-semibold underline"
              href="mailto:clemence.p14@gmail.com"
            >
              clemence.p14@gmail.com
            </a>
        </div>
      </div>
    )
}