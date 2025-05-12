const OrderPage = () => {
  return (
    <>
      <main className="w-full min-h-full grid grid-cols-2">
        <section className="w-full bg-red-300">
          <form action="">
            <div>
              <input
                type="text"
                placeholder="inter you name"
                className="w-full px-10 py-2 border border-slate-100 "
              />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
          </form>
        </section>
        <section className="w-xl h-full bg-green-400">
          <h1>rehan</h1>
        </section>
      </main>
    </>
  );
};

export default OrderPage;
