const testimonials = [
  {
    id: 1,
    initial: "AS",
    name: "Ahmad Santoso",
    position: "Director - PT Maju Bersama",
    text: "Outstanding consulting service! The team is highly responsive and provides spot-on solutions. Our business has grown rapidly thanks to the strategies they recommended.",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    initial: "DP",
    name: "Dewi Permata",
    position: "CEO - Digital Innovation",
    text: "High level of professionalism! They don't just provide theory, but real implementation that resulted in a 50% increase in operational efficiency. Highly recommended!",
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    initial: "BW",
    name: "Budi Wijaya",
    position: "Manager - Global Enterprises",
    text: "The best partnership we've ever had! Their personal approach and deep understanding of our industry makes every solution highly relevant and effective.",
    bgColor: "bg-blue-500",
  },
];

const Service = () => {
  return (
    <div className="w-full py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-blue-500 text-sm font-semibold mb-4">
            What do our customers say?
          </div>

          <div className="text-3xl font-bold text-gray-800 mb-4">
            Success stories from our customers
          </div>

          <div className="text-gray-600 max-w-2xl mx-auto">
            Our pride is the success and satisfaction of our customers.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* <div className="flex items-center gap-3">
                <div
                  className={`${testimonial.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
