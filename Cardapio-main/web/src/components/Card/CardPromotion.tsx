interface ICard_promotion {
  img: string;
  originalPrice: number;
  discountedPrice: number;
  productName: string;
}

export function CardPromotion({ img, originalPrice, discountedPrice, productName }: ICard_promotion) {
  if (originalPrice <= discountedPrice) {
      throw new Error("O preço original deve ser maior que o preço com desconto.");
  }

  return (
      <li className="min-w-[300px] h-full rounded-xl relative overflow-hidden flex flex-col justify-end">
          <img className="absolute w-full h-full z-0" src={img} alt="" />
          <div className="bg-gradient-to-t from-zinc-900 transition-opacity z-10 absolute w-full h-full"></div>

          <p className="bg-red-600 w-fit font-semibold px-2 py-1 rounded-lg text-white absolute top-3 -left-1 z-20">
              10% OFF
          </p>
          <div className="z-20 text-white p-2">
              <strong>{productName}</strong>
              <div className="flex gap-2">
                  <p className="line-through text-red-500">
                      R$ {originalPrice.toFixed(2)}
                  </p>
                  <p>
                      R$ {discountedPrice.toFixed(2)}
                  </p>
              </div>
          </div>
      </li>
  );
}
