const references = [
  'Shields, P. M. (1981). Journal of Political and Military Sociology, 9(2), 215.',
  'Tran, Edwin (2017). Armstrong Undergraduate Journal of History, 7(2).',
  'Ford Foundation. Veterans, Deserters, and Draft-Evaders: The Vietnam Decade.',
  'Cooley, Andrew. The Viet Cong [Thesis].',
  'Ninh, Bao. The Sorrow of War. Pantheon Books, 1995.',
  'Stewart, Luke (2018). Études Canadiennes/Canadian Studies, No. 85, 67–96.',
  'Catechetical Guild Educational Society. Is This Tomorrow. 1947.',
  'United States Information Agency. "Communism Means Terrorism" [Poster]. National Archives RG 306, 1954.',
  'GlobalSecurity.org. South Vietnam: Desertions.',
  'Wikipedia contributors. Military history of African Americans in the Vietnam War.',
  'phData (2023). Analyzing the 1969 Vietnam War Draft Lottery.',
  'TIME Magazine (2020). Black Vietnam Veterans on Injustices They Faced.',
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-ink-dark/10 px-4 py-16 dark:border-ink/10 md:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm text-ink-dark/75 dark:text-ink/70">
          Research by Tung Vo, Lone Star College | The Honors College, 2024 | HISTH 1302
        </p>

        <details className="mt-10 rounded-lg border border-ink-dark/15 bg-surface-light/80 p-4 dark:border-ink/15 dark:bg-ink-dark/20">
          <summary className="cursor-pointer font-medium text-ink-dark dark:text-ink">
            View Full References
          </summary>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-dark/80 dark:text-ink/75">
            {references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  )
}
