"use client";

import React from "react";
import { Form, Button, Input } from "antd";

export default function TrackingPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="relative rounded-md shadow-md bg-white p-4">
      <title>Tracking | Zafa Trans Clone Website</title>
      <div className="mb-5 text-justify bg-gray-100 rounded p-2">
        Masukkan Kode Tracking yang diberikan oleh Customer Service saat tiket
        terbit. Kode ini akan membantu Anda melacak status perjalanan bus Anda.
      </div>
      <Form
        form={form}
        name="postal_code_form"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="postal_code"
          label="Kode Tracking"
          rules={[
            {
              required: true,
              message: "Kode Tracking tidak boleh kosong",
            },
            {
              pattern: /^[0-9]{5}$/,
              message: "Harus berupa 5-digit angka",
            },
          ]}
        >
          <Input placeholder="Kode Tracking" maxLength={5} />
        </Form.Item>

        <Form.Item>
          <Button
            type="none"
            htmlType="submit"
            className="rounded-lg p-1.5 px-4 bg-red-700 text-white hover:bg-red-900 disabled:bg-red-400  w-full mt-2 text-lg"
          >
            Check Lokasi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
