export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          Built by <span className="text-blue-400">Sajjad Ali</span> with React.js and Tailwind CSS
        </p>
        <p className="text-gray-600 text-sm">
          sajjad.ali.kayani@gmail.com
        </p>
      </div>
    </footer>
  )
}