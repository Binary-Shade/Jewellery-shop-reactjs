const stats = [
    { id: 1, name: 'Customized Design', value: '5000 +' },
    { id: 2, name: 'Satisfied Customers', value: '700 +' },
    { id: 3, name: 'Annual Purchases', value: '2 000+' },
  ]
  
  export default function Facts() {
    return (
      <div className="facts py-24 sm:py-32 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  