
import RequestInviteForm from "@/components/RequestInviteForm";

const RequestInviteSection = () => {
  return (
    <section id="request-invite" className="py-20 bg-white">
      <div className="gtm-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request an Invite</h2>
            <p className="text-xl text-gray-600">
              Join our exclusive community of GTM professionals. Fill out the form below to request an invite.
            </p>
          </div>
          <RequestInviteForm />
        </div>
      </div>
    </section>
  );
};

export default RequestInviteSection;
