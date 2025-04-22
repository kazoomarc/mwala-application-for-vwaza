import Image from "next/image";
const images = Array.from({ length: 31 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0"); // pads numbers like 001, 002...
  return `vwaza-${num}.jpg`;
});

export default function Home() {
  return (
    <div className="bg-[rgb(8,8,8)] min-h-screen font-sans font-[family-name:var(--font-geist-sans)">
      <div className="mx-3.5 lg:mx-[60px]">
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="text-white text-3xl font-bold mt-12 ">
            Hi, I'm Joel Mwala{" "}
          </h1>
          <p className="text-[#d5d5d5] text-[15px]">
            This is my application portfolio for the Graphic Designer position
            at Vwaza Multimedia Inc. After seeing your post Friday, I
            immediately felt inspired and locked in to create custom visuals
            from Saturday through Monday that align with your needs.
          </p>
          <p className="text-[#d5d5d5] text-[15px]">
            What you see before you is a current showcase of my visual design
            skills tailored specifically for Vwaza as a music streaming
            platform. I understand that in mainstream media, designs must both
            deliver clear messages and be visually appealing to capture the
            already declining attention span of social media users. This
            approach is key to increasing user engagement with the Vwaza app and
            driving conversions.
          </p>
          <p className="text-[#d5d5d5] text-[15px]">
            I care deeply about details and quality in every piece I create.
            These visuals demonstrate my versatile use of typography, colour,
            and form across print, screen, and web formats.
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl mt-[18px] border-1 border-dashed border-[transparent] border-t-[#ffffff14] pt-2 ">
            Explorations
          </h2>
          <div className="mt-6 flex flex-col items-center">
            {images.map((img, idx) => (
              <div className="relative w-full aspect-[5/4] mb-3 border border-dashed border-[#ffffff14]">
                <Image
                  src={`/images/${img}`}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl mt-[18px] border-1 border-[transparent] border-dashed border-t-[#ffffff14] pt-2">
            Closing Remarks(Extras about the works)
          </h2>
          <div className=" max-w-2xl flex flex-col gap-6">
            <p className="text-[#d5d5d5] text-[15px] mt-6">
              All explorations were created in Figma with animations developed
              in <span className="font-medium text-[#254fdb]">Jitter</span>. I
              primarily used the{" "}
              <span className="font-medium text-[#254fdb]">'Sora'</span>{" "}
              typeface for its bold presence that commands attention and
              readability from a distance. For the mock Vwaza Events website UI
              and billboard poster, I incorporated{" "}
              <span className="font-medium text-[#254fdb]">
                Instrument Serif
              </span>
              , while{" "}
              <span className="font-medium text-[#254fdb]">Albert Sans</span>
              was selected for UI playlist cards (I noticed you're using{" "}
              <span className="font-medium text-[#254fdb]">Proxima Nova</span>
              on your website, but chose freely available alternatives for this
              showcase).
            </p>
            <p className="text-[#d5d5d5] text-[15px]">
              I've maintained alignment with your brand colors—sky blue and blue
              on critical visuals, especially the logo treatments. All images
              are sourced from Lummipics (
              <span className="font-medium text-[#254fdb]">lummi.ai</span>)
              unless specified otherwise, with mockups created using Figma
              plugins.
            </p>
            <p className="text-[#d5d5d5] text-[15px]">
              I believe joining Vwaza Multimedia would help me grow as a graphic
              designer while pursuing my aspirations in{" "}
              <span className="font-medium text-[#254fdb]">
                motion graphics, illustration, and 3D design
              </span>
              . I'm excited about the possibility of contributing to your team
              while developing my social and management skills.
            </p>
            <p className="text-[#d5d5d5] text-[15px] mb-">
              For additional examples of my work demonstrating my understanding
              of form, typography, and color principles, please visit my Twitter
              profile{" "}
              <a
                href="https://x.com/mwala_joel"
                className="font-semibold underline text-[#25b1db]"
              >
                @mwala_joel
              </a>
              , where you'll find web design projects that showcase these
              fundamental design capabilities.
            </p>

            <div className="flex flex-col gap-4 mb-[112px]">
              <p className="text-[#b9b9b9] text-[18px] font-semibold ">
                Yours Trurly,
              </p>
              <a
                href="https://x.com/mwala_joel"
                className="font-semibold underline text-[#25b1db]"
              >
                @mwala_joel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
