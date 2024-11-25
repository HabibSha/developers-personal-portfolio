import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        {contactInfo.map((item) => {
          const { id, title, contact, icon } = item;
          return (
            <div
              key={id}
              className="rounded-md p-8 bg-glassEffect hover:border-[1px] hover:border-colorIndigo duration-300"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  y: { type: "spring", stiffness: 50 },
                  opacity: { duration: 1.8 },
                  ease: "easeInOut",
                  duration: 2.5,
                }}
              >
                <div className="select-none mb-5">
                  <img src={icon} alt="" className="w-[4rem]" />
                </div>
                <h4 className="h4 font-[500] mb-3">{title}</h4>
                <p className="body-1">{contact}</p>
              </motion.div>
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
