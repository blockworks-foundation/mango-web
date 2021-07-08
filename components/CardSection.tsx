const CardSection = () => {
  return (
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <img src="img/Card_Small1.png" alt="" />
        </div>
        <div class="w-full md:w-2/3 px-4 mb-4 md:mb-0">
          <img src="img/Card_Large1.png" alt="" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-2/3 px-4 mb-4 md:mb-0">
          <img src="img/Card_Large2.png" alt="" />
        </div>
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <img src="img/Card_Small2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardSection
