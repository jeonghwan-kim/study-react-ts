import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import ToastList from '../components/ToastList'
import {Toast} from '../models'

interface Props {
  toasts: Toast[]
}

class ToastListContainer extends React.Component<Props> {
  render() {
    return <ToastList {...this.props}/>
  }
}

const mapStateToProps = (state: RootState) => ({
  toasts: state.app.toasts
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToastListContainer)
