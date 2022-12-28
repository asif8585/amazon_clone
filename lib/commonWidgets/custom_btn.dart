import 'package:flutter/material.dart';

class CustomBtn extends StatelessWidget {
  final String text_btn;
  final VoidCallback onTap;
  const CustomBtn({Key? key, required this.text_btn, required this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      child: Text(text_btn),
      style: ElevatedButton.styleFrom(
        minimumSize: Size(double.infinity, 50),
      ),
    );
  }
}
