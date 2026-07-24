export default function Mission() {
  return (
    <section
      id="mission"
      className="gutter bg-light text-ink py-[clamp(72px,12vw,168px)]"
    >
      <div className="max-w-[1400px] mx-auto grid gap-x-16 gap-y-12 lg:grid-cols-[1.5fr_1fr] items-end">
        <h2 className="font-extrabold text-[clamp(30px,4.6vw,68px)] leading-[1.06] tracking-[-0.01em] text-balance max-w-[16ch]">
          Making flooring simple for more than{" "}
          <span className="text-red">sixty years</span>.
        </h2>

        <div className="lg:pb-3">
          <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.7] text-ink/65 font-normal max-w-[52ch]">
            Building Plastics Inc. is an employee-owned wholesale distributor of
            decorative surfacing and flooring — the Southeast's largest. Since
            1963 we've stocked, delivered and stood behind the products that
            dealers, contractors and designers build with every day.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-[clamp(48px,7vw,104px)] grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {[
          ["Employee-owned", "Every associate has a stake in your service."],
          ["Six states", "A Southeastern footprint, close to the jobsite."],
          ["800+ product lines", "One relationship for the whole floor."],
          ["Since 1963", "Six decades of dealer partnerships."],
        ].map(([h, d]) => (
          <div key={h} className="bg-light p-[clamp(20px,2.4vw,36px)]">
            <p className="display text-[clamp(15px,1.35vw,20px)] leading-tight">
              {h}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-ink/55 font-normal">
              {d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
