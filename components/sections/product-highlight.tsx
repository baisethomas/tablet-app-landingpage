export function ProductHighlight() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1F1F23] mb-3">
          Built for focus.
        </h3>
        <p className="text-[#1F1F23]/60 text-base font-normal">
          Structured, calm, and designed for lasting reflection.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center">
        {/* Large Dark Mode Screenshot Container */}
        <div className="w-full max-w-[900px] aspect-[16/10] md:aspect-[16/9] bg-[#1F1F23] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#e5e7eb] p-2 md:p-4 overflow-hidden relative">
          {/* Browser Chrome Mock */}
          <div className="flex items-center gap-2 mb-6 opacity-30 px-2">
            <div className="w-3 h-3 rounded-full bg-[#FFFFFF]/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFFFFF]/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFFFFF]/20" />
          </div>

          {/* UI Layout */}
          <div className="flex h-full text-[#FFFFFF]">
            {/* Sidebar */}
            <div className="hidden md:block w-64 border-r border-[#FFFFFF]/10 pr-6 pl-2">
              <div className="text-xs font-medium text-[#FFFFFF]/40 uppercase tracking-widest mb-6">
                Library
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-sm text-[#FFFFFF] font-medium bg-[#FFFFFF]/10 px-3 py-2 rounded">
                  Sunday Service
                </div>
                <div className="text-sm text-[#FFFFFF]/60 px-3 py-2">Bible Study</div>
                <div className="text-sm text-[#FFFFFF]/60 px-3 py-2">Personal Study</div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 px-4 md:px-12">
              <div className="max-w-2xl mx-auto mt-4 md:mt-8">
                <h4 className="text-3xl font-medium tracking-tight mb-2">
                  The Practice of Patience
                </h4>
                <div className="text-sm text-[#FFFFFF]/40 mb-10">James 1:2-4</div>

                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-lg text-[#FFFFFF]/90 leading-relaxed">
                      Patience is not passive waiting. It is active endurance.
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#2F4FA2]">
                    <p className="text-base text-[#FFFFFF]/70 italic">
                      {'"Let perseverance finish its work so that you may be mature and complete, not lacking anything."'}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-[#FFFFFF]/90 leading-relaxed">
                      We often confuse the delay with denial. But in the delay, character is forged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
