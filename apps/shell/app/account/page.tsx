import { AccountLoader } from './account-loader';

export default function AccountPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-brand">
          Vue microfrontend
        </p>
        <h1 className="mt-1 font-display text-3xl">Account</h1>
        <p className="mt-2 text-slate-600">
          The shell registers a Vue custom element and renders{' '}
          <code>&lt;account-mfe /&gt;</code>. This boundary does not require
          React.
        </p>
      </div>
      <AccountLoader />
    </div>
  );
}
