import React from "react";

//motion
import { motion } from "framer-motion";
const HomeCard = () => {
  return (
    <div>
      <motion.div className="p-10">
        <motion.div class="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-5">
          <div className="flex justify-center items-center">
            <motion.div
              className="border rounded-md border-blue-600 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/prop1.jpg"
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
              ></motion.img>
            </motion.div>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              className="border rounded-md border-blue-600 p-3"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/prop4.jpg"
                initial={{ opacity: 0, translateX: 70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
              ></motion.img>
            </motion.div>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              className="border rounded-md border-blue-600 p-3"
              initial={{ opacity: 0, translateX: 50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                initial={{ opacity: 0, translateX: -70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
              ></motion.img>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeCard;
