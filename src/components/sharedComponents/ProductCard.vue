<template>
  <div class="card"
  :class="{
    highlighted: isHighlighted,
    selected: isSelected
    }">
    <p class="card-title">{{card.title}}</p>
    <ul class="card-list">
      <li
        v-for="item in card.items"
        :key="item.name"
        class="card-item"
      >
        <SvgIcon v-if="item.icon && isIconAble(item.icon)" class="item-logo" :name="`${item.icon}`" :size="isSmallDevice?{height:20, width: 20}:{height:40, width: 40}"/>
        <span class="item-name">{{item.name}}</span>
      </li>
    </ul>
    <a class="card-link">SHOW MORE<SvgIcon class="right-arrow" name='RightArrow' :color="isHighlighted?'white': 'primary'" :size="isSmallDevice?{height:12, width: 12}:{height:20, width: 20}"/></a>
  </div>
</template>

<script lang="ts" setup>
import { SVG_ICON_TYPE } from '@/libraries/storybook/svgIcon/SvgIconModel';
import SvgIcon from '@/libraries/storybook/svgIcon/SvgIcon.vue'
export interface CardItem {
  name: string;
  icon?: string;
}

export interface ICard {
  title: string;
  items: CardItem[];
}

import { StateKey } from "@/state/state";
import { inject } from 'vue';

const {isSmallDevice} = inject(StateKey)!;



interface ProductCardProps {
  card: ICard,
  isSelected?: boolean;
  isHighlighted?: boolean;
}

defineProps<ProductCardProps>();

function isIconAble (icon: string):boolean{
  return SVG_ICON_TYPE.some((svgIcon) => svgIcon === icon)
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/styles/main.scss";
  .card{
    padding: 2rem;
    height: 100%;
    aspect-ratio: 6 / 7;
    border-radius: 1rem;
    background: $color-background-3;
    overflow: hidden;
    box-shadow: 0 0px 2rem rgba(black,0.4);
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;
    -webkit-transition: all .2s;
    backdrop-filter: blur(25px);
    transition: all .3s;  
    transform: translate(-50%, -50%);
    filter: brightness(0.8);
    @media only screen and (max-width: $bp-smallest) {
      padding: 1.5rem;
      }

    .card-title{
      font-family: $font-primary;
      font-weight: 600;
      font-size: 2rem;
      border-radius: border-radius;
      text-transform: uppercase;
      color: $color-white;
      text-align: center;
      @media only screen and (max-width: $bp-smallest) {
        font-size: 1.5rem;
      }
    }

    .card-list{
      height: 100%;
      justify-self: center;
      width: max-content;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .card-item{
        width: 100%;
        color: $color-white;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1.5rem;
        @media only screen and (max-width: $bp-smallest) {
          font-size: 1.4rem;
          gap: 1rem;
        }
        .item-logo{
          display: flex;
          justify-content: start;
        }
        .item-name{
          width: auto;
        }
      }
    }

    .card-link{
      display: flex;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: nowrap;
      font-size: 1.7rem;
      color: $color-primary;
      @media only screen and (max-width: $bp-smallest) {
        gap: .5rem;
        font-size: 1.2rem;
      }
      .right-arrow{
        margin-top: -2px;
        stroke: $color-primary;
        @media only screen and (max-width: $bp-smallest) {
          margin-top: -1px;
      }
      }
    }
  }
  .selected {
    filter: brightness(1);
    backdrop-filter: none;
      @media (hover: hover) {
        &:hover{
          transform: translate(-50%, -51%) scale(1.05);
          transform-origin: center;
          // box-shadow: 0px 0px 1rem rgba(black,.6);
          filter: drop-shadow(0rem 1rem 2rem rgba(black, 1));
          cursor: pointer;
          background: $color-background-hover-3;
        }
      }
    }
    .highlighted{
      background: $color-primary-light;
      .card-link{
        color:$color-white;
        .right-arrow{
          stroke: $color-white;
        }
      }
    }
    @media (hover: hover) {
      .selected.highlighted:hover{
        background: $color-primary;
      }
    }
</style>
