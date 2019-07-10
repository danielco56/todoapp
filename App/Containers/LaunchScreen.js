import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { Images } from "../Themes";
import { connect } from "react-redux";
import CustomInput from "../Components/Input/CustomInput";
import * as fromLogin from "../Redux/Login";

// Styles
import styles from "./Styles/LaunchScreenStyles";

class LaunchScreen extends Component {
  constructor(props) {
    super(props), (this.state = { email: "" });
  }

  onEmailChange = email => {
    this.setState({ email });
  };

  onSavePress = () => {
    const { email } = this.state;
    const { save } = this.props;

    save(email);
  };

  render() {
    const { email } = this.state;
    return (
      <View style={styles.mainContainer}>
        <CustomInput
          placeholder={"Email"}
          secureTextEntry={false}
          value={email}
          onChangeText={this.onEmailChange}
        />
        <Button onPress={this.onSavePress} title={"Save in Redux"} />
        <Button
          onPress={() => console.log(this.props.email, "email din redux")}
          title={"Afisare"}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: fromLogin.email(state)
});

const mapDispatchToProps = dispatch => ({
  save: email => dispatch(fromLogin.LoginActions.save({ email }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen);
