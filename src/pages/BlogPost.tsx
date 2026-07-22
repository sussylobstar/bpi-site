import { useParams, Link } from "react-router-dom";
import { PageHero, Section } from "../components/ui";
import { POSTS } from "../data";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { id } = useParams();
  const post = POSTS.find((p) => String(p.id) === id);
  if (!post) return <NotFound />;

  return (
    <>
      <PageHero eyebrow={`${post.category} · ${post.date}`} title={post.title} />
      <Section tone="ink">
        <article className="max-w-[68ch]">
          <div className="space-y-6 text-[clamp(16px,1.25vw,19px)] leading-[1.8] text-white/75 font-light [text-wrap:pretty]">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-14 pt-8 border-t border-white/10">
            <Link to="/blog" className="text-[14px] text-white/70 hover:text-red transition-colors">
              ← All posts
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
