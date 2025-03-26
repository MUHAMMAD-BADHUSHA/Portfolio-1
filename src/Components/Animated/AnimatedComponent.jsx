import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
function AnimatedComponent() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: +50 }}
      animate={ inView ?  { opacity: 1, y: 0 } : { opacity: 0, y: 50 } }
      transition={{ duration: 1.5 }}
    >
      
      <p className="text-light">
          with skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
          MongoDB, and Git. Experienced in building full-stack applications such
          as a <b>Blog platform</b> <b>Todo list</b>,<b>mini calculator</b>and a
           <b>Ecommerce-website</b>. Currently pursuing MERN Stack Development as a Self-leaner at
          Zoople Institute, Ernakulam.{" "}
        </p>
    </motion.div>
  );
}

export default AnimatedComponent;
