<script>
    import { CardSwiper } from '$lib/CardSwiper/'
  
    let data = (index) => {
      return {
        title: 'Card ' + index,
        description: 'Description ' + index
      }
    }
  </script>
  
  <div class="h-screen w-screen" align="center">
    <CardSwiper cardData={data} minSwipeDistance={0.35}/>
  </div>