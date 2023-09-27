<template lang="pug">
section 
  Freelaywer-Help
  Legal-Connection(
    :img="'manegerConnect'"
    :width="'275px'"
  )
  ConsultationsSlider
  LaywerOnline
  SliderReviews
  HowItWorks
  RequestFreeCall
  TwentyFourVue
  SliderLaywer
  SelectOur
  ThemaReferences
  BenefitsFree
  PortalLawyer
  NewMaterialVue
  HowAskQuestion

</template>

<script>
// @ is an alias to /src

import FreelaywerHelp from '../components/ComponentsForHomeView/FreelaywerHelp.vue'
import LegalConnection from '../components/ConponetsForMainView/LegalConnection.vue';
import ConsultationsSlider from '@/components/ComponentsForHomeView/СonsultationsSlider.vue';
import LaywerOnline from '@/components/ComponentsForHomeView/LaywerOnline.vue';
import SliderReviews from '@/components/ConponetsForMainView/SliderReviews.vue';
import HowItWorks from '@/components/ComponentsForHomeView/HowItWorks.vue';
import RequestFreeCall from '../components/ComponentsForHomeView/RequestFreeCall.vue';
import TwentyFourVue from '../components/ComponentsForHomeView/TwentyFour.vue';
import SelectOur from '@/components/ConponetsForMainView/SelectOur.vue';
import ThemaReferences from '@/components/ConponetsForMainView/ThemaReferences.vue';
import PortalLawyer from '@/components/ConponetsForMainView/PortalLawyer.vue';
import SliderLaywer from '../components/ComponentsForHomeView/SliderLaywer.vue';
import BenefitsFree from '@/components/ComponentsForHomeView/BenefitsFree.vue';
import NewMaterialVue from '../components/ComponentsForHomeView/NewMaterial.vue';
import HowAskQuestion from '@/components/ComponentsForHomeView/ HowAskQuestion.vue';

export default {
  name: 'HomeView',
  components: {
    FreelaywerHelp,
    LegalConnection,
    ConsultationsSlider,
    LaywerOnline,
    SliderReviews,
    HowItWorks,
    RequestFreeCall,
    TwentyFourVue,
    SelectOur,
    ThemaReferences,
    PortalLawyer,
    SliderLaywer,
    BenefitsFree,
    NewMaterialVue,
    HowAskQuestion,

  }
}
</script>
