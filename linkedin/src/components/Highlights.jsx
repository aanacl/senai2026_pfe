export default function Highlights() {
  return (
    <div className="card">
      <h3>Destaques</h3>

      <div className="posts">
        {[1, 2, 3].map((item) => (
          <div className="post" key={item}>
            <p>Publicação</p>
            <span>Legenda da publicação...</span>
            <img
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}