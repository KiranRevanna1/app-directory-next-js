import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Layouts</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            A layout is UI that is shared between multiple pages. On navigation,
            layouts preserve state, remain interactive, and do not re-render.
            Two or more layouts can also be nested.
          </li>
          <li>Try navigating between categories and sub categories.</li>
        </ul>
      </div>

      <div>
        <ExternalLink href="https://beta.nextjs.org/docs/routing/pages-and-layouts">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
