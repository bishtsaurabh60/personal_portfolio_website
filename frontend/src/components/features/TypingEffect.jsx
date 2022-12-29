import Typewriter from "typewriter-effect";

const TypingEffect = () => {
    return (
      <article className="text-amber-400">
        <Typewriter
          options={{
            strings: ["Self-Taught.","MERN Developer.", "Web Developer.", "Tech Enthusiast."],
            autoStart: true,
            loop: true,
          }}
        />
      </article>
    );
}
export default TypingEffect;