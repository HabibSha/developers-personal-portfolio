import { Link } from "react-router-dom";

interface Contact {
  id: string;
  title: string;
  contact: string;
  icon: string;
}

interface Props {
  contactInfo: Contact[];
}

const ContactInfo: React.FC<Props> = ({ contactInfo }) => {
  return (
    <section className="relative py-[5rem]">
      <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {contactInfo.map((contactI) => {
          const { id, title, contact, icon } = contactI;
          return (
            <div
              key={id}
              className="rounded-md p-8 bg-glassEffect hover:border-[1px] hover:border-colorIndigo duration-300"
            >
              <div className="select-none mb-5">
                <img src={icon} alt="" className="w-[4rem]" />
              </div>
              <h4 className="h4 font-[500] select-none mb-3">{title}</h4>
              <p className="body-1">{contact}</p>
            </div>
          );
        })}
      </article>
      <article className="text-center mt-12">
        <Link
          to="https://maps.app.goo.gl/593Hf6dhMrWUvYbu5"
          target="_blank"
          className="btnPrimary"
        >
          Visit on Google Maps
        </Link>
      </article>
    </section>
  );
};

export default ContactInfo;
