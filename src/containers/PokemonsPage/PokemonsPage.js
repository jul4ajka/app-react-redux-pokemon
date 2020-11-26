import React, { Component } from 'react'
import './PokemonsPage.css'
import Item from '../../components/Item/Item'
import Pokemon from '../../components/Pokemon/Pokemon'
import Options from '../../components/Options/Options'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import fetchPokemons from '../../store/actions/pokemons'
import showItem from '../../store/actions/showItem'
import getAllTypes from '../../store/actions/getAllTypes'
import filterItems from '../../store/actions/filterItems'

class PokemonsPage extends Component {
  componentDidMount() {
    this.props.fetchPokemons(this.props.initialArr)
    this.props.getAllTypes()
  }

  render() {
    const { fetchPokemons, showItem } = this.props
    return (
      <div className='PokemonsPage'>
        <select
          onChange={event => this.props.filterItems(event)}
          className={'SelectPokemonsType'}
        >
          <option>Select all</option>
          {this.props.allTypes.map((type, index) => {
            return <Options type={type.name} key={index} />
          })}
        </select>
        <div className='Section_wrapper'>
          <div className='Item_wrapper'>
            {this.props.loading ? (
              <Loader />
            ) : (
              this.props.pokemonsArr.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      showItem(item.url)
                    }}
                    key={index}
                  >
                    <Item
                      name={item.name}
                      img={item.image}
                      types={item.types}
                    />
                  </div>
                )
              })
            )}
            <button
              className='Load_more'
              onClick={() => {
                fetchPokemons(this.props.nextArr)
              }}
            >
              Load more
            </button>
          </div>
          <div className='Pokemon_wrapper'>
            {this.props.showPokemon ? (
              <Pokemon
                image={this.props.pokemonInfo.sprites.front_default}
                types={
                  this.props.pokemonInfo.types.length === 1
                    ? this.props.pokemonInfo.types[0].type.name
                    : this.props.pokemonInfo.types[0].type.name +
                      ' ' +
                      this.props.pokemonInfo.types[1].type.name
                }
                attack={(Math.random() * 100).toFixed(0)}
                deffence={(Math.random() * 100).toFixed(0)}
                hp={(Math.random() * 100).toFixed(0)}
                sp_attack={(Math.random() * 100).toFixed(0)}
                sp_deffence={(Math.random() * 100).toFixed(0)}
                speed={(Math.random() * 100).toFixed(0)}
                weight={(Math.random() * 100).toFixed(0)}
                total_moves={(Math.random() * 100).toFixed(0)}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemonsArr: state.pokemons.pokemonsArr,
    initialArr: state.pokemons.initialArr,
    nextArr: state.pokemons.nextArr,
    pokemonInfo: state.showItem.pokemonInfo,
    showPokemon: state.showItem.showPokemon,
    allTypes: state.getAllTypes.allTypes,
    loading: state.pokemons.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemons: url => dispatch(fetchPokemons(url)),
    showItem: url => dispatch(showItem(url)),
    getAllTypes: () => dispatch(getAllTypes()),
    filterItems: event => dispatch(filterItems(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage)
