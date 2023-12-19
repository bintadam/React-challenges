export default function Color ({ hex, name }) {
    return (
      <div
        className='px-4 py-16' style={{ backgroundColor: hex }}
      >
        <h2 className="text-slate-800 font-base uppercase text-center">{name}</h2>
      </div>
    )
}