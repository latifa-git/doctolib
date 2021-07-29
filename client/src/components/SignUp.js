import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/action";
import "../pages/homecss.css";
import { Link } from "react-router-dom";

import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from "antd";

const { Option } = Select;
const addresss = [
  {
    value: "tunis",
    label: "tunis",
    children: [
      {
        value: "sfax",
        label: "sfax",
        children: [
          {
            value: "mahres",
            label: "mahres",
          },
        ],
      },
    ],
  },
  {
    value: "tunisia",
    label: "tunis",
    children: [
      {
        value: "sousse",
        label: "sousse",
        children: [
          {
            value: "nabel",
            label: "nabel",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = () => {
//const {loading, users} = useSelector((state) => state)
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, phone, password, address, gender }));
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+216">+216</Option>
        <Option value="+213">+213</Option>
      </Select>
    </Form.Item>
  );

  return (
  
    
    <div className="tow">
     
      
    <div className="front">
    <img className="logo"
       src="http://medic-app-react.next-item.com/static/media/logo.0f801e6b.svg"
       alt="medicapp"
     />
     <h1>Sign up</h1>
     <h6>Create your Account</h6>
    <div>
      
     
    <Form
      onClick={handelSubmit}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        address: ["tunis", "sfax", "mahres"],
        prefix: "216",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        onChange={(e) => setPassword(e.target.value)}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
        onChange={(e) => setName(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="location"
        label="location"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your location",
          },
        ]}
        onChange={(e) => setAddress(e.target.value)}
      >
        <Cascader options={addresss} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
        onChange={(e) => setPhone(e.target.value)}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
        onChange={(e) => setGender(e.target.value)}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: false,
                  message: "Please input the captcha you got!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="./components/agreement">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form> 
      
    </div>
      
    <div>
    <h5>Have an account? <Link to="/SignIn">Sign in!</Link></h5>
      
      </div>
      
    </div>
    <img className="back"
        src="https://s.abcnews.com/images/Health/doctor-gty-er-180205_hpMain_4_1x1_608.jpg"
        alt="medicapp"
      />
</div>
        
    
  );
};

export default SignUp;
