import { Card } from '@demo/ui';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-brand">
          Next.js shell
        </p>
        <h1 className="mt-1 font-display text-3xl">Frontend architecture demo</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          This application is the host. It reuses packages and composes
          independently owned microfrontends.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Shared package: @demo/ui">
          This card is imported from a reusable workspace package. It is not a
          microfrontend.
        </Card>
        <Card title="Live coding slot: @demo/utils">
          During the masterclass we will create a small utils package and consume
          it here. That is package reuse, not a new frontend.
        </Card>
      </div>

      <Card title="Theme tokens">
        <p>
          Shared brand from <code>@demo/theme</code> is blue. This shell
          overrides <code>--color-brand</code> locally, so the swatch below is
          violet.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-block h-10 w-10 rounded-md bg-brand" />
          <span className="text-sm text-slate-600">
            Shell override: <code>bg-brand</code>
          </span>
        </div>
      </Card>
    </div>
  );
}
