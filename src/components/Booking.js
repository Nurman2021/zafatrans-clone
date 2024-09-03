import React from "react";
import { Form, Select, Input, Tabs, DatePicker } from "antd";

const BookingForm = () => {
  return (
    <div className="relative rounded-md shadow-md bg-white p-4">
      <Form name="item_form" layout="vertical">
        <Tabs>
          <Tabs.TabPane
            tab={<span style={{ color: "#d90007" }}>Pesan Tiket</span>}
            key="pesan_tiket"
          >
            <Form.Item
              rules={[{ required: true }]}
              label={"Lokasi Dari"}
              required
            >
              <Select
                defaultValue="makassar"
                options={[
                  { value: "makassar", label: "Makassar" },
                  { value: "mamuju", label: "Mamuju" },
                  { value: "palopo", label: "Palopo" },
                ]}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              label={"Lokasi Tujuan"}
              required
            >
              <Select
                defaultValue="makassar"
                options={[
                  { value: "makassar", label: "Makassar" },
                  { value: "mamuju", label: "Mamuju" },
                  { value: "palopo", label: "Palopo" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={["description"]}
              label="Tgl. Keberangkatan"
              required={true}
            >
              <DatePicker maxTagCount="responsive" style={{ width: "100%" }} />
            </Form.Item>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Kirim Barang" key="kirim_barang">
            <Form.Item
              name={["payload", "content"]}
              label="content"
              placeholder="content"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </div>
  );
};

export default BookingForm;
