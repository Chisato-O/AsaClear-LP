export default function AsaClearLandingPage() {
  const appFrames = ["mock1.png", "mock2.png", "mock3.png"];

  const themes = [
    {
      title: "取り組んでいること",
      text: "飲み会中の行動を抑制せずに、翌朝をクリアにする小さな行動を、最適なタイミングで提案するアプリです。",
    },
    {
      title: "捉えている課題",
      text: "飲酒中は楽しく元気なため判断ができず、その結果、翌朝になって後悔してしまう。その瞬間に、楽しさを壊さず判断を補ってくれる存在がないと考えています。",
    },
    {
      title: "AsaClearの立ち位置",
      text: "飲酒自体を否定せず、我慢させない。楽しさの味方でありながら、翌朝まで満足感が続く体験を目指しています。",
    },
  ];

  const differentiation = [
    "二日酔いの本質を、体調ではなく感情の落差として捉える",
    "楽しさから後悔へ一転する、意思決定の問題として向き合う",
    "不安や罪悪感を煽らず、飲酒中の楽しい気持ちに寄り添う",
    "楽しかった夜を前向きな朝までつなげる体験を大切にする",
  ];

  const steps = [
    {
      step: "01",
      title: "飲み会中にひらく",
      text: "その場の楽しさを邪魔しないタイミングで使う",
    },
    {
      step: "02",
      title: "小さな行動提案を受け取る",
      text: "水を飲む、少し休むなど、今できる行動だけを提案する",
    },
    {
      step: "03",
      title: "翌朝に気分をふり返る",
      text: "夜から朝まで、満足感がどうつながったかを見る",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6EBDD] text-[#2F2F2F]">
      <section className="px-5 pb-8 pt-6">
        <div className="mx-auto max-w-md">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="AsaClear logo"
              className="h-6 w-6 rounded-2xl bg-white p-0.8 shadow-sm"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight text-[#F16813]">AsaClear</p>
              <p className="text-xs text-[#2F2F2F]/55">楽しかった夜を、前向きな朝につなぐ</p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] bg-white/78 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <p className="text-sm font-medium text-[#F16813]">What we are building</p>
            <h1 className="mt-3 text-[34px] font-bold leading-[1.12] tracking-tight">
              飲み会中の小さな行動で、
              <span className="block text-[#F16813]">翌朝の満足感までつなぐ。</span>
            </h1>
            <p className="mt-5 text-[15px] leading-7 text-[#2F2F2F]/76">
              AsaClearは、飲酒中の判断不能を補い、満足感を翌朝まで保つ、感情にフォーカスした体験づくりに取り組んでいます。
            </p>
          </div>
        </div>
      </section>

<section className="px-5 pt-2">
        <div className="mx-auto max-w-md">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#F16813]">APP MOCK</p>
          </div>

          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {["mock1.png", "mock2.png", "mock3.png"].map((fileName, index) => (
              <div
                key={index}
                className="flex min-w-[220px] snap-start flex-col items-center justify-center rounded-[28px] border border-black/5 bg-white/70 text-center shadow-sm"
              >
                <div className="relative h-[420px] w-full overflow-hidden rounded-[24px]">
                  <img
                    src={`/${fileName}`}
                    alt={`App Mock ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/220x420?text=Image+Not+Found";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

              
      <section className="px-5 pt-10">
        <div className="mx-auto max-w-md">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#F16813]">ABOUT</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">どんなことに取り組んでいるのか</h2>

          <div className="mt-5 space-y-4">
            {themes.map((item) => (
              <div key={item.title} className="rounded-[24px] bg-white px-5 py-5 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-semibold text-[#F16813]">{item.title}</p>
                <p className="mt-3 text-[15px] leading-7 text-[#2F2F2F]/78">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-10">
        <div className="mx-auto max-w-md rounded-[28px] bg-[#2F2F2F] px-5 py-6 text-white shadow-lg">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#3BAFDA]">INSIGHT</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight">
            二日酔いの本質は、
            <span className="text-[#F5A36C]">体調ではなく感情の落差。</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-white/78">
            楽しさから後悔へ一転する、その間にある意思決定の問題に向き合いたい。これがAsaClearの出発点です。
          </p>
        </div>
      </section>

      <section className="px-5 pt-10">
        <div className="mx-auto max-w-md">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#F16813]">DIFFERENCE</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">大切にしていること</h2>

          <div className="mt-5 space-y-3">
            {differentiation.map((item) => (
              <div key={item} className="rounded-[22px] bg-white px-4 py-4 shadow-sm ring-1 ring-black/5">
                <p className="text-[15px] leading-7 text-[#2F2F2F]/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-10">
        <div className="mx-auto max-w-md">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#F16813]">FLOW</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">アプリの使い方</h2>

          <div className="mt-5 space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="rounded-[24px] bg-white px-5 py-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#3BAFDA]">STEP {item.step}</p>
                <p className="mt-2 text-base font-semibold">{item.title}</p>
                <p className="mt-2 text-[15px] leading-7 text-[#2F2F2F]/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
