import CtaForm from './CtaForm';

export default function CTA() {
  return (
    <section className="bg-softblue mt-4 p-5 text-center text-white">
      <article className="lg:w-2/5 lg:mx-auto">
        <p className="py-2 mt-4 uppercase tracking-widest">
          35,000+ Already Joined
        </p>
        <h4 className="text-2xl font-medium">
          Stay up-to-date with what we&apos;re doing
        </h4>
        <CtaForm />
      </article>
    </section>
  );
}
